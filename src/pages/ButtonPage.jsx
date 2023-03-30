import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "./../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell />
          Clik me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          yeah
        </Button>
      </div>
      <div>
        <Button warning rounded>
          wooooo
        </Button>
      </div>
      <div>
        <Button success>yeah wohoo</Button>
      </div>
      <div>
        <Button danger>Mooeeee</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
