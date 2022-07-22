import React, { useMemo, useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import { TableButton } from '../../atoms/TableButton/TableButton';
import * as UI from './style';
import * as API from '../../../api/api';
import { cp } from 'fs/promises';
import Paging from '../../atoms/Pagination/Pagination';

export const UserReserveTable = () => {
    const [reserveLists, setReserveLists] = useState<any>([])
    const [email, setEmail] = useState('')

  // 1: REGNumber, name, number, reserveId, timeId
  // 2: RestaurantName
  // 3: ReserveTime
  const [data1, setData1] = useState<any>([]);
  const [data2, setData2] = useState<string[]>([]);
  const [data3, setData3] = useState<string[]>([]);

    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [total, setTotal] = useState(10);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => reserveLists, [reserveLists])

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      if (res) {
        setEmail(res.email);
      }
    });
  }, []);

  useEffect(() => {
    API.get(`/api/reserves/user/${email}`).then((res) => {
      const datas = res.reserves;
      datas.forEach((data: any) => {
        setData1((result: any) => {
          return [
            ...result,
            {
              REGNumber: data.REGNumber,
              timeId: data.timeId,
              reserveId: data.reserveId,
              name: data.name,
              number: data.number,
            },
          ];
        });
      });
    });
  }, [email]);

    useEffect(() => {
        API.get(`/api/reserves/user/${email}`).then((res) => {
            setPerPage(res.perPage)
            setTotal(res.total)
            const datas = res.reserves
            datas.forEach((data:any) => {
                setData1((result:any) => {
                    return [
                        ...result,
                        {
                            REGNumber: data.REGNumber,
                            timeId: data.timeId,
                            reserveId: data.reserveId,
                            name: data.name,
                            number: data.number
                        }
                    ]}
                )
            })
        })
    }, [email])

    useEffect(() => {
        data1.forEach((data: any) => {
            API.get(`/api/restaurants/${data.REGNumber}`).then((res) => {
                setData2((result: any) => [...result, res.name])
            })
            API.get(`/api/times/${data.timeId}`).then((res) => {
                setData3((result: any) => [...result, `${res[0].year}년 ${res[0].month}월 ${res[0].date}일 ${res[0].hour}시`])
            })
        })
    }, [data1])

    // 레스토랑명, 날짜
    useEffect(() => {
        for(let i = 0; i < data1.length; i++) {
            // console.log([i], data1[i])
            // console.log([i], data2[i])
            // console.log([i], data3[i])
            setReserveLists((result: any) => [...result, {
                timeId: data1[i].timeId,
                restaurant: data2[i],
                name: data1[i].name,
                number: data1[i].number,
                date: data3[i]
            }])
        }
    }, [data3])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        state,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination
    );
    const { pageIndex } = state

    return (
        <div className="table">
            <UI.StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup:any, index: number) => (                   
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column: any, index: number) => (
                                <UI.StyledTh {...column.getHeaderProps()} key={index}>
                                    {column.render('Header')}
                                </UI.StyledTh>
                            ))}
                            <UI.StyledTh>승인상태</UI.StyledTh>
                            <UI.StyledTh>예약관리</UI.StyledTh>
                            <UI.StyledTh>리뷰</UI.StyledTh>
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any, index: number) => {
                                    return (
                                        <UI.StyledTd key={index} {...cell.getCellProps()}>{cell.render('Cell')}</UI.StyledTd>
                                    );
                                })}
                                <UI.StyledTd role="cell">예약 완료</UI.StyledTd>
                                <UI.StyledTd role="cell">
                                    <UI.BtnModification>수정</UI.BtnModification>
                                    <TableButton>취소</TableButton>
                                </UI.StyledTd>
                                <UI.StyledTd role="cell"><UI.BtnReview>작성하기</UI.BtnReview></UI.StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </UI.StyledTable>
            <Paging page={pages} setPage={setPages} total={total} perPage={perPage} />
        </div>
    );
}

export default UserReserveTable;