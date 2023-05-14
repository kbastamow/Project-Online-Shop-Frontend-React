import { useContext, useEffect, useState } from "react"
import "./Profile.scss"
import { UserContext } from '../../context/UserContext/UserState'
import DateFormatter from '../DateFormatter/DateFormatter'
import { OrderContext } from "../../context/OrderContext/OrderState"
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {

const {logout} = useContext(UserContext);
const {user, findUser} = useContext(UserContext)
const {orders, pastOrders} = useContext(OrderContext)
const [userDetails, setUserDetails] = useState("")
const [orderHistory, setOrderHistory] = useState("")

useEffect(()=> {  
    findUser()
    pastOrders()
    console.log(user)
}, [])


//Complexxx math to calculate total - could be done in backend??
const calculateOrderTotal = (productSet) => {
    let prices = []
    productSet.forEach(item => prices.push(item.price * item.Order_Product.quantity))
    return prices.reduce((acc, val) => acc + val).toFixed(2)
}

useEffect(()=>{

    if(user.email) {  //login user doesn't include email so checking after change
        setUserDetails(<><p>Name: {user.name} {user.surname}</p>
        <p>Email: {user.email} </p>
        <p>Registered since: {<DateFormatter dateString={user.createdAt} />}</p></>)
    }
}, [user])



useEffect(()=> {  
    if(orders) {
    setOrderHistory(<>
        {orders.map(order => {
            return(
            <>
            <tr key={order.createdAt}>
                <td>{<DateFormatter dateString={order.createdAt} />}</td>
                 <td> 
                 {order.Products.map(product => <>{product.name} <span className="small-text">({product.Order_Product.quantity} pieces)</span><br/></>)} 
                </td>
                <td> {calculateOrderTotal(order.Products)}€ </td>
            </tr>
            </>)})}
        
        </>)
    }
    
}, [orders])




return (
    <div className="profile-div">
       <div  classname="container-fluid">
            <div className="d-flex flex-wrap justify-content-around p-4">

                <div className="col-11 col-md-3">
                    <button className="w-100 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#user-profile" aria-expanded="false" aria-controls="collapseExample">
                        <div className="dark-header p-2 text-light">Your profile </div>
                    </button>
                    <div className="collapse" id="user-profile">
                        <div className="card card-body text-start neon-glow">

                            {userDetails}

                        </div>
                    </div>
                </div>

                <div className="col-11 col-md-5">
                    <button className="w-100 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#user-orders" aria-expanded="false" aria-controls="collapseExample">
                        <div className="dark-header p-2 text-light">View order history</div>
                    </button>
                    <div className="collapse" id="user-orders">
                        <div className="card card-body text-start neon-glow">
                            <table className="table text-start ">
                                <thead>
                                    <tr>
                                        <th className="col-2">Date</th>
                                        <th className="col-3">Products</th>
                                        <th className="col-2 " >Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orderHistory}
                                </tbody>
                            </table>
                        </div>
                        </div>
                        </div>
                        <div className="col-11 col-md-3 mb-3">
                            <button className="w-100 p-0" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
                                <div className="dark-header p-2 text-light">View current cart</div>
                            </button>
                            <button className="w-100 p-0" type="button">
                                <div className="dark-header p-2 text-light">Browse favorites</div>
                            </button>
                            <button className="w-100 p-0" type="button">
                                <div className="dark-header p-2 text-light" onClick={() => logout()}>Logout</div>
                            </button>
                            {/* <div className="collapse" id="user-cart">
                                <div className="card card-body">
                                </div>

                            </div> */}
                        </div>

                    
                
            </div>

        </div>

    </div>

)
}

export default Profile




// orders.map(order => (
//     <>
//     <tr key={order.createdAt}>
//         <th>{<DateFormatter dateString={order.createdAt} />}</th>
//          <th> {order.Products.map(product => 
//                 <>{product.name} ({product.Order_Product.quantity})<br/>
//                 </>
//                 )} </th>
//         <th> Price </th>


//     </tr>
    
//     </>))