const loading = () => {
  return (
    <div className="h-full flex justify-center items-center" aria-label="now loading...">
      <div className="animate-spin h-20 w-20 border-8 border-teal-600  rounded-full border-t-transparent transform rotate-180 absolute"></div>
      <div className="animate-spin h-20 w-20 border-4 border-indigo-400 rounded-full border-t-transparent absolute"></div>
    </div>
  )
}

export default loading
