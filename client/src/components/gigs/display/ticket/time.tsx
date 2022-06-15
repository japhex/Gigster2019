export const Time = ({ time }: { time: string }) => (time !== '0' ? <>Doors open: {time.substring(0, 5)} PM</> : null)
