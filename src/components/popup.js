import {IconX} from '@tabler/icons-react'

export const Popup = ({content, closeBtn}) => {

    return (
        <div className="popup">
            <IconX className={'popup__close'} onClick={closeBtn}/>
            <div className="popup__box">
                {
                    content
                }
            </div>
        </div>
    )
}