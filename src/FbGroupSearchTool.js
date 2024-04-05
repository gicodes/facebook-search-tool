import axios from 'axios';
import { useState } from 'react';
import { ErrorText, Main, Title } from './GST-body';

let defaultTownCoords = {
  lat: "42.0834", 
  lng: "-71.3967",
}; // default coordinates for {townName}
let defaultRadius = 20; // default radius

const FacebookGroupSearchTool = ({ townName }) => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const access_token = process.env.REACT_APP_ACCESS_TOKEN;
      // destructuring results from geocoding town coordinates
      const { lat, lng } = defaultTownCoords;

      // get the Facebook Graph API's /search endpoint using access token
      // use the given geo coordinates and radius to find groups near {townName}
      const url = `https://graph.facebook.com/v19.0/search?type=group&q=&center=${lat},${lng}&distance=${defaultRadius}&access_token=${access_token}`;
      const response = await axios.get(url);
      
      setGroups(response.data.data);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.error?.message || 'An error occurred');
      setGroups([]);
    }
  };

  return (
    <div className='p-1'>
      {Title}
      <hr/>

      {Main}
      <div className='fullWidth just-center'>
        <button onClick={handleSearch}> 
          Search for groups in {townName || "Franklin, Massachusetts"} 
        </button>
      </div>
      {
        error && <ErrorText error={error}/>
      }   
      <div className='just-center'>
        {
          groups.length > 0 && <ul> 
            These groups are located within {defaultRadius} mile radius of {townName}
              {
                groups.filter(group => (
                  group.member_count > 1000 &&
                  group.privacy === 'SECRET'
                )).map(group => (
                  <li key={group.id}>
                    <b>{group.name}</b> has ({group.member_count} members)
                  </li>
                ))
              }
          </ul>
        }
      </div>
    </div>
  );
}

export default FacebookGroupSearchTool;