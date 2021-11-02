import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

const SignIn = ({ providers }) => {
	return (
		<>
			<Header />
			<div className="flex flex-col justify-center min-h-screen items-center text-center -mt-20">
				<img
					src="https://links.papareact.com/ocw"
					alt="Instagram logo"
					className="w-auto max-h-32"
				/>
				<p className="text-gray-400 font-light text-lg sm:text-xl md:text-2xl">
					This is not REAL. I built this while learning NextJs.
				</p>
				<div className="mt-20 ">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="py-3 px-5 bg-blue-500 md:hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-lg font-medium text-lg text-white"
								onClick={() =>
									signIn(provider.id, { callbackUrl: '/' })
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

export default SignIn;
