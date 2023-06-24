import {useEffect} from "react";




 const Fetch = (path , value)=>{
    useEffect(() => {
        getDataToHome()
    }, [])
    function getDataToHome() {
        const fetchDataH = async () => {
            const res = await fetch(`https://food-list-bdb10-default-rtdb.firebaseio.com/${path}.json`);
            const dat = await res.json();
            const ObjDataHome = { ...dat };
            const foodListData = []
            for (const key in ObjDataHome) {
                foodListData.push({
                    key: key,
                    name: ObjDataHome[key].name,
                    price: ObjDataHome[key].price,
                    titel: ObjDataHome[key].titel,
                    catagory: ObjDataHome[key].catagory,
                    img: ObjDataHome[key].img,
                    userName: ObjDataHome[key].userName,
                    emaluser: ObjDataHome[key].emaluser,
                    phonUser: ObjDataHome[key].phonUser,
                    cityUser: ObjDataHome[key].cityUser,
                    street: ObjDataHome[key].street,
                    build: ObjDataHome[key].build,
                    qtn: ObjDataHome[key].qtn,
                    PriceAll: ObjDataHome[key].PriceAll,
                })
            }
            value(foodListData)

        }
        fetchDataH()

    }
 }
 export default Fetch