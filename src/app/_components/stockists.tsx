import { title } from "process";

export const BUY_NOW_URL = "https://aotearoabooks.co.nz/everything-she-wanted/";

const STORES = [
  {
    title: "Aotearoa Books",
    url: BUY_NOW_URL,
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
    url: "https://www.unibooks.co.nz/index.php?route=product/product&product_id=31387&search=everything+she+wanted",
  },
];

const LIBRARIES = [
  {
    title: "Kaitaia Library",
    url: "https://ent.kotui.org.nz/client/en_AU/farnorth/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one?qu=martinette+williams",
  },
  {
    title: "Whangarei Library",
    url: "https://wdc.ent.sirsidynix.net.au/client/en_AU/whangarei/search/results?qu=martinette+williams&te=",
  },
  {
    title: "Auckland Library",
    url: "https://discover.aucklandlibraries.govt.nz/search/card?id=519edf9b-dac0-5580-a487-37d5430edc77&entityType=FormatGroup",
  },
  {
    title: "Waikato District Libraries",
    url: "https://ent.kotui.org.nz/client/en_AU/waikato/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Hamilton Library",
    url: "https://ent.kotui.org.nz/client/en_AU/hamilton/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Matamata-Piako Library",
    url: "https://ent.kotui.org.nz/client/en_AU/mpdc/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/onehttps://ent.kotui.org.nz/client/en_AU/mpdc/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Tauranga Library",
    url: "https://ent.kotui.org.nz/client/en_AU/tauranga/search/results/?ln=en_US&q=martinette%20williams&rw=0",
  },
  {
    title: "Puke Ariki / New Plymouth Library",
    url: "https://ent.kotui.org.nz/client/en_AU/np/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Hastings District Library",
    url: "https://ent.kotui.org.nz/client/en_AU/hastings/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Wairarapa Library Service",
    url: "https://wls.spydus.co.nz/cgi-bin/spydus.exe/ENQ/OPAC/BIBENQ?SETLVL=&BRN=1603253",
  },
  {
    title: "South Wairarapa Library",
    url: "https://swlibrary.spydus.co.nz/cgi-bin/spydus.exe/FULL/OPAC/BIBENQ/384082433/104716291,1",
  },
  {
    title: "Wellington Library",
    url: "https://wcl.spydus.co.nz/cgi-bin/spydus.exe/ENQ/OPAC/BIBENQ?SETLVL=&BRN=1603253",
  },
  {
    title: "Tasman District Library",
    url: "https://ent.kotui.org.nz/client/en_AU/tasman/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Westland District Library",
    url: "https://ent.kotui.org.nz/client/en_AU/westland/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Grey District Library",
    url: "https://ent.kotui.org.nz/client/en_AU/grey/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Kaiapoi Library",
    url: "https://ent.kotui.org.nz/client/en_AU/waimakariri/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Christchurch Library",
    url: "https://christchurch.bibliocommons.com/v2/record/S37C1547606",
  },
  {
    title: "Dunedin Libraries",
    url: "https://ent.kotui.org.nz/client/en_AU/dunedin/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Alexandra Library",
    url: "https://ent.kotui.org.nz/client/en_AU/cq/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
  },
  {
    title: "Gore Library",
    url: "https://gorelibraries.spydus.co.nz/cgi-bin/spydus.exe/FULL/OPAC/BIBENQ/296308/855104,1",
  },
  {
    title: "Invercargill Library",
    url: "https://ent.kotui.org.nz/client/en_AU/invercargill/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:5823992/one",
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
            <li className="" key={url}>
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
