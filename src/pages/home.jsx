import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useState } from "react";


const home = () => {

    const [tutorials, setTutorials] = useState([])
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    
    //APİDEN VERİ ÇEKME 
    const getTutoririals = async () => {
      const {data} =  await axios(url);  //date desctractır edildi çünkü apide date alt veri şeklinde
      console.log(data);
      setTutorials(data); //data state e konuldu
    };

    useEffect(() => {
      
        getTutoririals() //döngüye girmemesi için açılışta bir kere çalışması için useffect ile fonk çağrıldı

    }, []) //mount
    



  return (
    <>
          <AddTutorial/>
          <TutorialList tutor = {tutorials}/>  {/*...TutorialList olarak göndermiyoruz olduğu gibi gönderiyoruz giden veri
          tipi dizi olarak gitsin diye
        */}
    </>
  )
}

export default home