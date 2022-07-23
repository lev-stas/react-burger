import {API} from "./constants";
import {checkRespose} from "./utils";

function makeOrder(ingredients) {
  return  (fetch (`${API}orders`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients":ingredients
    })
  })
    .then(res => checkRespose(res)))
}
export default makeOrder
