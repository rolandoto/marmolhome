

export default function Article({ urls}) {
  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-[#e07c30]">
        <article  className="rounded-3xl">
          <img
            src={urls}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
