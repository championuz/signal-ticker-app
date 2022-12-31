import React, {useState, useContext, useEffect} from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { backgrd, base } from "./Constants";
import { AuthContext } from '../context/AuthContext';


const ListCard = () => {
  const {userData} = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userToken = `Bearer ${userData.accessToken}`
  const BASE_URL = "https://signaltickerbackend.herokuapp.com/signals/get-post-signal"
  // const BASE_URL = "http://localhost:3006/signals/get-post-signal"


 useEffect(() => {
  const getAllSignals = () => {
    fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'token': userToken,
        'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((json)=>  {
          if(json.status === 'ok'){
            setList(json.data.reverse())
            } else {
                console.log(json.message)
            }
        })
    .catch((error) => {
        console.error(error);
    })
    .finally(()=>setLoading(false));
  }
  getAllSignals();
 }, [list]);

 useEffect(()=>{
  const filteredData = list.slice(0, 10);
    setFilteredData(filteredData);
 }, [list])




    return (
      <View>
        {loading ?
       <View  style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",}}>
        <ActivityIndicator size="large" color="#ff000" />
     </View>
     :
     <View>
        {filteredData.map((data) =>( 
        <TouchableOpacity
        key={data._id}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#4b3ca7",
          height: 270,
          elevation: 1,
          width: 320,
          borderRadius: 16,
        }}
      >
         <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontSize: 16,
            }}
          >
            {data.orderType}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 5,
            paddingHorizontal: 10,
            marginLeft: 20,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#5facdb",
              fontSize: 20,
            }}
          >
            SIGNAL
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            {" "}
            - - - - - - -
          </Text>
          <Text
            style={{
              color: "#5facdb",
              fontSize: 16,
            }}
          >
            {data.signalType}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Entry Price
          </Text>

          <Text
            style={{
              color: "#fff",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            {data.entryPrice}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Take Profit
          </Text>

          <Text
            style={{
              color: "#fff",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            {data.targetPrice}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Stop Loss
          </Text>

          <Text
            style={{
              color: "#fff",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            {data.stopLoss}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 17,
            marginVertical: 8,
            color: "#a2a2db",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          - - - - - - - - - - - - - - - - -
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontSize: 16,
            }}
          >
            Additional Note:</Text>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: -8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontSize: 14,
              paddingTop: 7,
              textAlign: "justify",
            }}
          >
          {data.note}
          </Text>
        </View>
      </TouchableOpacity>))}

      {/* //       <View style={{textAlign: "center",}}>
      // <Text>No Signals yet</Text>
      // </View>  */}

      </View> }
      </View>
    );
  }

  export default ListCard;

