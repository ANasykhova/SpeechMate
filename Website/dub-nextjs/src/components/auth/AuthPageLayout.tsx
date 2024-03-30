import Layout from '~/core/ui/Layout';
import Logo from '~/core/ui/Logo';
import Heading from '~/core/ui/Heading';

const AuthPageLayout: React.FCC<{
  heading: string | React.ReactNode;
}> = ({ children, heading }) => {
  return (
    //<Layout>
    <div className="basis-1/2 h-screen flex items-center justify-center">
      <div
        // className={
        //   'w-1/2 float-right flex-col items-center space-y-4' +
        //   ' md:space-y-5 lg:space-y-16 lg:bg-gray-50 dark:lg:bg-background' +
        //   ' animate-in fade-in slide-in-from-top-8 duration-1000'
        // }
      className='w-full flex flex-col items-center justify-center space-y-3'>
        <Logo/>

        <div
          className={`flex flex-col items-center space-y-4 rounded-xl border-transparent bg-white px-2 py-1 dark:bg-transparent md:w-8/12 
          md:border md:px-8 md:py-6 lg:w-6/12 lg:px-6 lg:shadow-2xl dark:lg:border-dark-800 lg:dark:bg-background dark:lg:shadow-[0_0_1200px_0] lg:dark:shadow-primary/30 xl:w-6/12 2xl:w-6/12`}
        >
          <div>
            <Heading type={4}>{heading}</Heading>
          </div>

          {children}
        </div>
      </div>
      </div>
    //</Layout>
  );
};

export default AuthPageLayout;
