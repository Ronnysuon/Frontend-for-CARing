import React from 'react'
import Abs from './Abs.png';
import AirFilter from './AirFilter.PNG'
import BadBattery from './BadBattery.PNG'
import BrakeLock from './BrakeLock.PNG'
import EngineTemp from './EngineTemp.PNG'
import FuelFilter from './FuelFilter.PNG'
import IgnitionSwitchWarning from './IgnitionSwitchWarning.PNG'
import LowTirePressure from './LowTirePressure.PNG'
import OilPressure from './OilPressure.PNG'
import SteeringLock from './SteeringLock.PNG'
import WarningInFuelFilter from './WarningInFuelFilter.PNG'

export default function DashSymbols() {
  return (

    <div>
    <a class="btn">
    <img src={Abs} width="40" alt="Break Warning Light" />
    </a>

    <a class="btn" >
    <img src={AirFilter} href="" width="40" alt="Clogged Air Filter" />
    </a>

    <a class="btn" >
    <img src={BadBattery} href="" width="40" alt="Bad Battery" />
    </a>

    <a class="btn" >
    <img src={BrakeLock} href="" width="40" alt="BrakeLock" />
    </a>

    <a class="btn" >
    <img src={EngineTemp} href="" width="40" alt="EngineTemp" />
    </a>

    <a class="btn" >
    <img src={FuelFilter} href="" width="40" alt="FuelFilter" />
    </a>
    
    <a class="btn" >
    <img src={IgnitionSwitchWarning} href="" width="40" alt="IgnitionSwitchWarning" />
    </a>

    <a class="btn" >
    <img src={LowTirePressure} href="" width="40" alt="LowTirePressure" />
    </a>

    <a class="btn" >
    <img src={OilPressure} href="" width="40" alt="LowTirePressure" />
    </a>

    <a class="btn" >
    <img src={SteeringLock} href="" width="40" alt="SteeringLock" />
    </a>

    <a class="btn" >
    <img src={WarningInFuelFilter} href="" width="40" alt="Fuel Filter Warning" />
    </a>




    </div>

  )
}
