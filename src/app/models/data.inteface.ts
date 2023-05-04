export interface IData {
    mangnetsAndMangeticField: IDataChild,
    magneticFieldMeasurementUnit: IDataChild,
    theStrenghtOfEarthMangeticField: IDataChild,
    theMagicCirclesOfNajdan: IDataChild,
    magneticTherapy: IDataChild
}

interface IDataChild {
   title: string,
   text: string
}