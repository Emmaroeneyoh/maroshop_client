import React from 'react'
import {useState, useEffect} from 'react'
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Payfund} from '../../redux/fund'
import {useNavigate} from 'react-router-dom'



function Pay() {
    const { cart, cartPrice, cartTotal } = useSelector((state) => state.cart)
    const { invoice} = useSelector((state) => state.invoice)
    const {user} = useSelector((state) => state.user)
    const username = user.name
    const email = user.useremail
    const id = user.userId
    const [fund, setfund] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

     const config = {
       public_key: "FLWPUBK_TEST-1cd1854e6e34f2dabaaa3953456feee8-X",
       tx_ref: Date.now(),
       amount: cartPrice,
       currency: "NGN",
       payment_options: "card,mobilemoney,ussd",
       customer: {
         email: email,
         name: username,
       },
       customizations: {
         title: "pay now",
         description: "Payment for funds",
         logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
       },
     };

     const handleFlutterPayment = useFlutterwave(config);

    useEffect(() => {
      console.log(user) 
      if (user === {}) {
        console.log('this is loged user : ', user)
    } else {
        console.log('user not logged in')
        navigate('/login')
    }
    })

    const money = (e) => {
        e.preventDefault()
        console.log( email, username)
        // const stated = {id, fund, username, email,  }
        // dispatch(Payfund(stated))
          handleFlutterPayment({
            callback: (response) => {
              console.log('this is response :' , response);
              const transaction_id = response.transaction_id;
              const tx_ref = response.tx_ref;
              const stated = {id,  transaction_id , tx_ref, cart, cartPrice, cartTotal}
              dispatch(Payfund(stated))
              
              closePaymentModal(); // this will close the modal programmatically
            },
              onClose: () => {
                  if (invoice.success === true) {
                    navigate('/')
                }
            },
          });
       
    }

  return (
    <div>
          <Form onSubmit={money}>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add More Fund To Your M-WALLET</Form.Label>
        <Form.Control type="number"value={fund}
          placeholder="Add Fund"
          onChange={(e) => setfund(e.target.value)} />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Pay
      </Button>
    </Form>
    </div>
  );
}

export default Pay