import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        className="mr-1 stroke-current text-primary-500"
        src="assets/images/logo.png"
        width="55"
        height="55"
      >
      </img>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
