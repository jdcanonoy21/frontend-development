import { GoBell, GoCloudDownload } from 'react-icons/go';
import Button from './../components/Button';

const ButtonPage = () => {
  return (
    <div className="flex">
      <div>
        <div>
          <Button primary>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button primary outline>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button primary rounded>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button primary rounded outline>
            <GoBell />
            Primary
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button secondary>
            <GoBell />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            <GoBell />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            <GoBell />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary rounded outline>
            <GoBell />
            Secondary
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button success>
            <GoBell />
            Success
          </Button>
        </div>
        <div>
          <Button success outline>
            <GoBell />
            Success
          </Button>
        </div>
        <div>
          <Button success rounded>
            <GoBell />
            Success
          </Button>
        </div>
        <div>
          <Button success rounded outline>
            <GoBell />
            Success
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button warning>
            <GoBell />
            Warning
          </Button>
        </div>
        <div>
          <Button warning outline>
            <GoBell />
            Warning
          </Button>
        </div>
        <div>
          <Button warning rounded>
            <GoBell />
            Warning
          </Button>
        </div>
        <div>
          <Button warning rounded outline>
            <GoBell />
            Warning
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button danger>
            <GoBell />
            Danger
          </Button>
        </div>
        <div>
          <Button danger outline>
            <GoBell />
            Danger
          </Button>
        </div>
        <div>
          <Button danger rounded>
            <GoBell />
            Danger
          </Button>
        </div>
        <div>
          <Button danger rounded outline>
            <GoBell />
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
