import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "./store/message/message-actions";

function App() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);

  useEffect(() => {
    dispatch(loadMessages(0));
  },[]);

  // every 5 second update messages
  
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     console.log(messages.messages[messages.messages.length-1]?.id);
  //     dispatch(loadMessages(messages.messages[messages.messages.length-1]?.id))}, 10000);
    
  //   return () => {
  //     clearTimeout(timerId)
  //   }
  // }, [messages]);

  return ( 
    <div className = "App" >
      Init project
    </div>
  );
}

export default App;