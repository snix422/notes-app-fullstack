import { Modal } from "@mui/material"
import { Note } from "../../types/type"
import { CategoryLabel, CloseIconImg, DescriptionHeading, TitleHeading, WrapperModal } from "./ModalItem.style"
import CloseIcon from "../../assets/close.png"

interface ModalItem {
    isOpen: boolean,
    handleClose: () => void,
    data:Note
}

const ModalItem : React.FC<ModalItem> = ({isOpen,handleClose,data}) => {
    console.log(data);
    return(
        <Modal open={isOpen} onClose={handleClose}>
            <WrapperModal>
            <TitleHeading>{data.title}</TitleHeading>
            <DescriptionHeading>{data.description}</DescriptionHeading>
            {data.category ? <CategoryLabel>{data.category}</CategoryLabel>: null }
            <CloseIconImg src={CloseIcon} alt="close icon" onClick={handleClose} />
            </WrapperModal>
        </Modal>
    )
}

export default ModalItem 