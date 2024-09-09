
const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-blue-950 text-white">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl mb-4">Sorry, we couldn't find this page.</p>
			<a rel="noopener noreferrer" href="#" className="bg-white text-black inline-block px-8 py-3 font-semibold rounded">Back to homepage</a>
		</div>
	</div>
</section>
  )
}

export default NotFoundPage