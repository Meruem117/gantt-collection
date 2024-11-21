import GSTC from 'gantt-schedule-timeline-calendar'

export const rowsFromDB = [
    {
        id: "1",
        label: "Row 1",
    },
    {
        id: "2",
        label: "Row 2",
    },
]

export const itemsFromDB = [
    {
        id: "1",
        label: "Item 1",
        rowId: "1",
        time: {
            start: GSTC.api.date("2020-01-01").startOf("day").valueOf(),
            end: GSTC.api.date("2020-01-02").endOf("day").valueOf(),
        },
    },
    {
        id: "2",
        label: "Item 2",
        rowId: "1",
        time: {
            start: GSTC.api.date("2020-02-01").startOf("day").valueOf(),
            end: GSTC.api.date("2020-02-02").endOf("day").valueOf(),
        },
    },
    {
        id: "3",
        label: "Item 3",
        rowId: "2",
        time: {
            start: GSTC.api.date("2020-01-15").startOf("day").valueOf(),
            end: GSTC.api.date("2020-01-20").endOf("day").valueOf(),
        },
    },
]

export const columnsFromDB = [
    {
        id: "id",
        data: ({ row }) => GSTC.api.sourceID(row.id), // show original id (not internal GSTCID)
        sortable: ({ row }) => Number(GSTC.api.sourceID(row.id)), // sort by id converted to number
        width: 80,
        header: {
            content: "ID",
        },
    },
    {
        id: "label",
        data: "label",
        sortable: "label",
        isHTML: false,
        width: 230,
        header: {
            content: "Label",
        },
    },
]
