import isBeachClosed from '@/constants/beachStatus'

const Warning = ({beachID}) => {
   return isBeachClosed(beachID) ? <div>Beach Closed Due to COVID-19</div> : <></>
}

export default Warning;
