function Test () {
    if (process.env.NODE_ENV !=='development') {
        console.log(process.env.NODE_ENV);
        console.log (process.env.NEXT_PUBLIC_DADATA);
    }
    return <>Test</>
}

export default Test;

export const getServerSideProps = async () => {
    let dadata = process.env.NODE_ENV;
    console.log('form srever ' + dadata);
    return {
      props: {},
    };
  };
  