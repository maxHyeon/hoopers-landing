import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-6 pb-20">
      <header className="text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900 pb-6">
          {'The best solution for\n'}
          <span className="text-primary-500">Basketball Club management</span>
        </h1>
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up with e-mail
          </button>
        </Link>
      </header>
    </Section>
  </Background>
);

export { Hero };
