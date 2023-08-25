import { Skeleton } from 'antd';

interface compProps {
  tableTop: string[];
}

const CustomTableLoader = ({ tableTop }: compProps) => (
  <>
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {tableTop.map((el: string, i: any) => (
            <th scope="col" className="px-2 py-3" key={i}>
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableTop.map((el: string) => (
            <td scope="col" className="px-2 py-3" key={el}>
              <Skeleton.Input active />
            </td>
          ))}
        </tr>
        <tr>
          {tableTop.map((el: string) => (
            <td scope="col" className="px-2 py-3" key={el}>
              <Skeleton.Input active />
            </td>
          ))}
        </tr>
        <tr>
          {tableTop.map((el: string) => (
            <td scope="col" className="px-2 py-3" key={el}>
              <Skeleton.Input active />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </>
);

export {CustomTableLoader};
