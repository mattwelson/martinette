const STORES = [
  {
    title: "Aotearoa Books",
    url: "https://aotearoabooks.co.nz/everything-she-wanted/",
  },
  {
    title: "Copy Press",
    url: "https://www.copypress.co.nz/product/everything-she-wanted/",
  },
  {
    title: "Pae Pukapuka",
    url: "https://paepukapukanz.com/products/everything-she-wanted-marinette-williams?_pos=1&_sid=5e9ae420e&_ss=r",
  },
  {
    title: "University Book Shop Dunedin",
    url: "https://www.unibooks.co.nz/index.php?route=product/product&path=62&product_id=188669&sort=pd.name&order=ASC",
  },
];

const LIBRARIES = [
  {
    title: "Auckland",
    url: "https://discover.aucklandlibraries.govt.nz/search/card?id=519edf9b-dac0-5580-a487-37d5430edc77&entityType=FormatGroup",
  },
  {
    title: "Tauranga",
    url: "https://ent.kotui.org.nz/client/en_AU/tauranga/search/results/?ln=en_US&q=martinette%20williams&rw=0",
  },
  {
    title: "Palmerston North",
    url: "https://ent.kotui.org.nz/client/en_AU/pn/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Christchurch",
    url: "https://christchurch.bibliocommons.com/v2/record/S37C1547606",
  },
];

function Stockist({
  title,
  items,
}: {
  title: string;
  items: { title: string; url: string }[];
}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <ul>
          {items.map(({ title, url }) => (
            <li className="">
              <a href={url} target="_blank" rel="noreferrer noopener">
                <span className="text-blue-800">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Stockists() {
  return [
    <Stockist title="Bookstores" items={STORES} />,
    <Stockist title="Libraries" items={LIBRARIES} />,
  ];
}
