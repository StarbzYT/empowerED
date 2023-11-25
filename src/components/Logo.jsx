import { Header, Image } from 'semantic-ui-react';

function Logo({ src }) {
  return (
    <div>
      <Image
        style={{ height: '100px', width: '100px' }}
        src={src}
        circular
        alt="logo"
      />
      <Header style={{ marginBottom: '1em' }} size="huge">
        EmpowerED
      </Header>
    </div>
  );
}

export default Logo;
