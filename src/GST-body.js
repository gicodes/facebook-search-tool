export const Title = <h1 className='just-center success'>
  <span className="primary">Facebook</span>&nbsp; Group Search Tool
</h1>

export const DoneCheck = <span className="success">&#10003;</span>

export const Main = <div className='mt-1 p-1'>
  This tool primarily identifies and lists community or town Facebook groups that meet the following criteria. 
  <p> It should be able to take in town name and find all the other towns with an X mile radius. 
    Then report back the following;
  </p>
  <ul> 
    <li> Located within a X mile radius of X town.{DoneCheck}</li>
    <li>For example all groups with in 20 miles radius of Franklin, Massachusetts (<i>This is the default param for our search)</i>.{DoneCheck}</li>
    <li>The group type should be community or town groups where town members join to learn more about their community.{DoneCheck}</li>
    <li>Each group must have over 1,000 members.{DoneCheck}</li>
    <li>The groups should be private.{DoneCheck}</li>
    <li>excluding any business or buy/sell groups.</li>
  </ul> 
</div>

export const ErrorText=({error}) => ( <p className='just-center error'>Error: {error}</p>);