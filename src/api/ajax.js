
import axios from 'axios'

export default function ajax(url,data={},type='GET'){
  return new Promise(function(resolve,reject){
      let promise;
      if(type==='GET'){
        //解析一下data,然后重新组合一下url
        let newUrl=url;
        if(data.length>0){
          newUrl=newUrl+'?';
          Object.keys(data).forEach(key=>{
            url+=key+"="+data[key]+"&";
          })
        }
        promise=axios.get(url);
      }else{
        if(type==='POST')
        {
          return axios.post(url,data);
        }
      }
      promise.then(function(response){
        resolve(response.data);
      }).catch(function(error){
        reject(error);
      })
  })
}
