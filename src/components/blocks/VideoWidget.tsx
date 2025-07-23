'use client';

import { useEffect } from 'react';

export const VideoWidget = () => {
    useEffect(() => {
        const e = document.querySelector('.video-widget') as HTMLElement | null;
        const a = document.getElementById('video-widget__video') as HTMLVideoElement | null;
        const c = document.querySelector('.video-widget__container') as HTMLElement | null;

        const handleClick = () => {
            if (!e || !a || !c) return;

            if (e.getAttribute('data-state') === 'default') {
                e.setAttribute('data-state', 'opened');
                c.classList.add('new');
                a.currentTime = 0;
                a.muted = false;
            } else {
                e.setAttribute('data-state', 'default');
                c.classList.remove('new');
                a.muted = true;
            }
        };

        const handleOutsideClick = (t: MouseEvent) => {
            if (!e || !a) return;
            if (!e.contains(t.target as Node) && e.getAttribute('data-state') !== 'default') {
                e.setAttribute('data-state', 'default');
                a.muted = true;
            }
        };

        c?.addEventListener('click', handleClick);
        document.addEventListener('mouseup', handleOutsideClick);

        return () => {
            c?.removeEventListener('click', handleClick);
            document.removeEventListener('mouseup', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div id="popmechanic-form" className="video-widget" data-state="default">
                <div className="video-widget__container mutted">
                    <video
                        data-popmechanic-submit
                        id="video-widget__video"
                        loop
                        autoPlay
                        playsInline
                        muted
                        preload="auto"
                        controlsList="nodownload"
                        disablePictureInPicture
                        className="video-widget__video"
                    >
                        <source src="https://cdnv.boomstream.com/balancer/6ss5KvFv-U5NFGICa.mp4" type="video/mp4" />
                    </video>
                    <p className="video-text">Обращение команды поезда</p>
                    <div className="popmechanic-close" data-popmechanic-close>
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 0.818077L17.1819 0L9 8.18192L0.818077 0L0 0.818077L8.18192 9L0 17.1819L0.818077 18L9 9.81808L17.1819 18L18 17.1819L9.81808 9L18 0.818077Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                #popmechanic-form .video-widget {
                    position: fixed;
                    right: 0;
                    z-index: 999999;
                    bottom: 0;
                }

                .video-widget__container {
                    font-family: Helvetica;
                    overflow: hidden;
                    border-style: solid;
                    background: #eee;
                    transition: all 0.3s ease-in-out;
                    outline: 0;
                    cursor: pointer;
                    box-sizing: border-box;
                    user-select: none;
                    tap-highlight-color: transparent;
                    box-shadow: rgba(0, 0, 0, 0.2) 0 10px 20px;
                    position: fixed;
                    right: 20px;
                    z-index: 99999;
                    bottom: 50px;
                    border-radius: 20px;
                    border-width: 5px;
                    width: 140px;
                    height: 190px;
                    border-color: #fff;
                }

                .video-widget__container:hover {
                    transform: scale(1.05) translate(5px, -5px);
                    border-color: #131344;
                }

                .video-widget__video {
                    object-fit: cover;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    min-width: 100%;
                    min-height: 100%;
                    opacity: 0.9;
                    z-index: 0;
                }

                .video-widget__container.new {
                    height: 400px;
                    width: 250px;
                }

                .video-text {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    color: white;
                    border-radius: 5px;
                    text-align: left;
                    font-size: 14px;
                    font-weight: 500;
                }
                .popmechanic-close {
                    color: white;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                    text-align: center;
                    width: 14px;
                    height: 14px;
                    z-index: 1;
                }

                @media only screen and (max-width: 1023px),
                    only screen and (max-width: 479px) {
                    .video-widget__container {
                        right: 15px;
                        bottom: 95px;
                        width: 90px;
                        height: 125px;
                    }
                    .video-text {
                        font-size: 12px;
                        left: 4px;
                        font-weight: 600;
                    }
                }
            `}</style>
        </>
    );
};
