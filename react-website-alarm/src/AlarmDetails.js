const AlarmDetails = ({alarm}) => {
    return (
        <div className  = "alarm-details">
            <h4>
                {alarm.ts}
            </h4>
            <p>{JSON.stringify(alarm.alarmStatus)}</p>
        </div>
    )
}

export default AlarmDetails