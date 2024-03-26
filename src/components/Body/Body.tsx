import { useLocation } from "react-router-dom";

const Body = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" && (
        <>
          <div>
            <label htmlFor="my">Name</label>
            <br></br>
            <input type="text" id="my" />
          </div>

          <div>
            <label htmlFor="mail">Email</label>
            <br></br>
            <input type="text" id="mail" />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <br></br>
            <input type="text" id="phone" />
          </div>
        </>
      )}
      {pathname=== '/plan' &&
      <>
        Arcade
      </>}
      {pathname=== '/addons' &&
      <>
        Addons
      </>}
      {pathname=== '/summary' &&
      <>
        Summary
      </>}
    </div>
  );
};

export default Body;
