import React, { useEffect } from 'react';
import Phaser from 'phaser';

function ClockGame({ hours, selectedHour, onSpin }) {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 400,
            height: 400,
            parent: 'game-container',
            transparent: true,
            scene: {
                create: createClock,
                update: updateClock,
            },
        };

        const game = new Phaser.Game(config);
        let pointer;
        let spinning = false;

        function createClock() {
            const centerX = this.cameras.main.width / 2;
            const centerY = this.cameras.main.height / 2;

            const sunYellow = 0xFFAA00;
            this.graphics = this.add.graphics({ lineStyle: { width: 6, color: sunYellow } });
            this.graphics.strokeCircle(centerX, centerY, 150);

            for (let i = 0; i < hours; i++) {
                const angle = (2 * Math.PI * i) / hours - Math.PI / 2;
                const x1 = centerX + 140 * Math.cos(angle);
                const y1 = centerY + 140 * Math.sin(angle);
                const x2 = centerX + 120 * Math.cos(angle);
                const y2 = centerY + 120 * Math.sin(angle);

                this.graphics.strokeLineShape(new Phaser.Geom.Line(x1, y1, x2, y2));

                const numberX = centerX + 170 * Math.cos(angle);
                const numberY = centerY + 170 * Math.sin(angle);
                this.add.text(numberX - 10, numberY - 10, `${i + 1}`, {
                    font: '18px Arial',
                    fill: '#ffffff',
                    stroke: '#000000',
                    strokeThickness: 2,
                    shadow: {
                        offsetX: 2,
                        offsetY: 2,
                        color: '#000000',
                        blur: 1,
                        stroke: true,
                        fill: true,
                    },
                });
            }

            pointer = this.add.rectangle(centerX, centerY, 4, 130, 0xff0000);
            pointer.setOrigin(0.5, 1);
        }

        function updateClock() {
            if (onSpin && !spinning) {
                spinning = true;

                const anglePerHour = 360 / hours;
                const targetAngle = (selectedHour - 1) * anglePerHour - 90;

                const totalRotation = (360 * Phaser.Math.Between(3, 6)) + targetAngle;

                this.tweens.add({
                    targets: pointer,
                    angle: totalRotation,
                    ease: 'Cubic.easeOut',
                    duration: 3000,
                    onComplete: () => {
                        const finalRotation = (selectedHour - 1) * anglePerHour - 90;
                        pointer.setAngle(finalRotation);
                        spinning = false;
                    },
                });
            }
        }

        return () => {
            game.destroy(true);
        };
    }, [hours, selectedHour, onSpin]);

    return <div id="game-container" style={{ margin: '0 auto' }} />;
}

export default ClockGame;
