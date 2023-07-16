import Egypt from "../../../../assets/Airways/Egypt.png";
import Emirates from "../../../../assets/Airways/Emirates.png";
import Etihad from "../../../../assets/Airways/Etihad.png";
import Qatar from "../../../../assets/Airways/Qatar.png";

const Airways = (props) => {
  const airways = props.airway;
  //   console.log(airways);
  const airwaysImg = {
    "Egypt Air": Egypt,
    Emirates,
    Etihad,
    Qatar,
  };

  return (
    <>
      <img
        src={airwaysImg[airways]}
        className=" h-20 w-30 m-auto mt-4 text-center"
        alt={airways}
      />
    </>
  );
};

export default Airways;
