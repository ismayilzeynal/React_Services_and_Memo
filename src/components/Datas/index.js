import React from 'react'
import './index.scss'

function Datas(props) {

  React.useMemo(() => {
    // const fetchedData = fetch('https://636398d98a3337d9a2e1d68d.mockapi.io/jirono/users');
    // fetchedData.then(response => response.json())
    //   .then(data => props.setAllPeople(data));
    // console.log("data came here");                     // silmek

    const dataFetch = async () => {
      const data = await (
        await fetch(
          'https://636398d98a3337d9a2e1d68d.mockapi.io/jirono/users'
        )
      ).json();
      props.setAllPeople(data);
    };
    dataFetch();
  }, [props.changeCount])



  return (
    <>
      <div className='datas-printed-area'>
        <table className='data-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {props.allPeople.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Datas;