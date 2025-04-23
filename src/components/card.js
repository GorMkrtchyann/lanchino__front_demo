import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconX, IconHeart, IconHeartFilled} from '@tabler/icons-react'


export const Card = () => {

    return (
        <div className={'card'}>
            <div className="card__img">
                <img src="https://th.bing.com/th/id/OIP.-hqL4TRpBi9GBM8L73e2tQHaE8?w=960&h=640&rs=1&pid=ImgDetMain" alt=""/>
            </div>
            <div className="card__text">
                <h4>country potatoes</h4>
                <p>200g Potato cooked in oil of cooker cooker</p>
                <b>300 <span>AMD</span></b>
                <span className={'discount'}>500 AMD</span>
            </div>
            <div className="card__favorite">
                <IconHeart/>
            </div>
            <div className="card__addCart">
                <ShoppingCartIcon/>
            </div>
        </div>
    )
}