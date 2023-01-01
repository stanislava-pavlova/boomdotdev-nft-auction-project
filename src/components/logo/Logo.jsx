// import defaultLogo from '../../../public/images/logo.svg';
// import mutedLogo from '../../../public/images/logo-muted.svg';

function Logo({ type }) {
  //   return <img src={type == 'default' ? mutedLogo : defaultLogo} alt="logo" />;
  return (
    <img
      src={type === 'default' ? 'images/logo.svg' : 'images/logo-muted.svg'}
      alt="logo"
    />
  );
}

Logo.defaultProps = {
  type: 'default',
};

export default Logo;
