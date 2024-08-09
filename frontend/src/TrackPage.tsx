import { FaBuilding, FaHome, FaSubway, FaTree, FaWalking } from "react-icons/fa";

export default function TrackPage() {
    return (
        <main>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-lg">

                        <ul className="timeline timeline-vertical timeline-compact">
                            <li>
                                <div className="timeline-middle size-8 p-1.5 mx-3 rounded-full text-xl bg-primary text-primary-content"><FaHome /></div>
                                <div className="timeline-end">Leaving Home @11:34</div>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                            </li>
                            <li>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                                <div className="timeline-middle size-8 p-1.5 mx-3 rounded-full text-xl bg-base-300 text-base-content"><FaWalking /></div>
                                <div className="timeline-end">15 minutes on foot</div>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                            </li>
                            <li>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                                <div className="timeline-middle size-8 p-1.5 mx-3 rounded-full text-xl bg-primary text-primary-content"><FaBuilding /></div>
                                {/* <div className="timeline-middle w-8 h-0 mx-3"></div> */}
                                <div className="timeline-end">At office 11:56<>&ndash;</>12:13</div>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                            </li>
                            <li>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                                <div className="timeline-middle size-8 p-1.5 mx-3 rounded-full text-xl bg-base-300 text-base-content"><FaSubway /></div>
                                <div className="timeline-end">45 minutes Office to Park</div>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                            </li>
                            <li>
                                <hr className="bg-base-300 rounded-none min-h-2" />
                                <div className="timeline-middle size-8 p-1.5 mx-3 rounded-full text-xl bg-primary text-primary-content"><FaTree /></div>
                                <div className="timeline-end">GreenLand</div>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </main>
    )
}