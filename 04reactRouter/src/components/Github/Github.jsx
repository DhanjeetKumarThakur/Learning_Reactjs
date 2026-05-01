//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/DhanjeetKumarThakur")
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         console.log(responseData);
  //         setData(responseData);
  //       });
  //   }, []);

  /* 
    Another way to fetch data using loader in react router v6.4 and above
*/
  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl">
        <div>Github followers:{data.followers}</div>
        <img src={data.avatar_url} alt="Github Profille Pic" width={300} />
      </div>
    </>
  );
}

export default Github;
