import Modal from "components/Modal/Modal"
import { useState } from "react"

const Statistics = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    return (<>
        {<Modal>

            <div>ModalStatistics</div>
        </Modal>}
        <div>Statistics</div></>)
}
export default Statistics 