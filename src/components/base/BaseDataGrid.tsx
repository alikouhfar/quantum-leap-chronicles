import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SecurityIcon from "@mui/icons-material/Security";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridActionsCellItemProps,
  GridColDef,
  GridRowId,
  GridToolbarContainer,
  GridToolbarExport,
  useGridApiContext,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import { faIR } from "@mui/x-data-grid/locales";
import * as React from "react";

const initialRows = [
  {
    id: 0,
    name: "محمد",
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "ایران",
    discount: 42,
  },
  {
    id: 1,
    name: "فاطمه",
    age: 29,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "افغانستان",
    discount: 30,
  },
  {
    id: 2,
    name: "حسین",
    age: 35,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "ترکیه",
    discount: 15,
  },
  {
    id: 3,
    name: "سارا",
    age: 32,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "پاکستان",
    discount: 23,
  },
  {
    id: 4,
    name: "مهدی",
    age: 41,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "چین",
    discount: 8,
  },
  {
    id: 5,
    name: "رضا",
    age: 38,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "عراق",
    discount: 50,
  },
  {
    id: 6,
    name: "زهرا",
    age: 27,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "فرانسه",
    discount: 5,
  },
  {
    id: 7,
    name: "امیر",
    age: 24,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "آلمان",
    discount: 13,
  },
  {
    id: 8,
    name: "نرگس",
    age: 34,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "ایتالیا",
    discount: 40,
  },
  {
    id: 9,
    name: "علی",
    age: 39,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "هند",
    discount: 19,
  },
];
function localizeDate(date: Date) {
  return new Intl.DateTimeFormat("fa-IR").format(date);
}

function localizeDateTime(dateTime: Date) {
  return new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(dateTime);
}

function DeleteUserActionItem({
  deleteUser,
  ...props
}: GridActionsCellItemProps & { deleteUser: () => void }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <GridActionsCellItem {...props} onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">کاربر حذف شود؟</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            این عمل غیرقابل جبران است
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>لغو</Button>
          <Button
            onClick={() => {
              setOpen(false);
              deleteUser();
            }}
            color="error"
            autoFocus
            className="bg-t"
          >
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

type Row = (typeof initialRows)[number];

function CustomToolbar() {
  const apiRef = useGridApiContext();

  const handleCustomButtonClick = () => {
    alert("Custom button clicked!");
  };

  const handleOpenFilterPanel = () => {
    apiRef.current.showFilterPanel();
  };

  return (
    <GridToolbarContainer
      sx={{
        margin: "5px 5px 15px 10px",
      }}
    >
      <Typography variant="h6" flexGrow={1}>
        عنوان لیست
      </Typography>
      <Stack direction="row">
        {/* <GridToolbarFilterButton /> */}
        <GridToolbarExport
          slotProps={{
            tooltip: { title: "Export data" },
            button: { variant: "outlined" },
          }}
          csvOptions={{
            fileName: "customerDataBase",
            utf8WithBom: true,
          }}
          printOptions={{ disableToolbarButton: true }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          aria-label="download-csv"
          onClick={handleOpenFilterPanel}
          color="default"
        >
          <FilterAltIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="download-csv"
          onClick={handleCustomButtonClick}
          color="secondary"
        >
          <CloudDownloadIcon fontSize="small" />
        </IconButton>
      </Stack>
    </GridToolbarContainer>
  );
}

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      }, 500);
    },
    [],
  );

  const toggleAdmin = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      );
    },
    [],
  );

  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );

  const columns = React.useMemo<GridColDef<Row>[]>(
    () => [
      { field: "name", type: "string", headerName: "نام", editable: true },
      {
        field: "age",
        type: "number",
        resizable: false,
        headerName: "سن",
        disableExport: true,
        headerAlign: "left",
        align: "center",
      },
      {
        field: "dateCreated",
        type: "date",
        headerName: "تاریخ ایجاد",
        disableExport: true,
        headerAlign: "left",
        align: "center",
        valueFormatter: (params) => localizeDate(params),
      },
      {
        field: "lastLogin",
        type: "dateTime",
        width: 180,
        headerName: "آخرین ورود",
        headerAlign: "left",
        align: "center",
        valueFormatter: (params) => localizeDateTime(params),
      },
      {
        field: "isAdmin",
        type: "boolean",
        width: 250,
        headerName: "دسترسی ادمین دارد؟",
        headerAlign: "left",
        align: "center",
        sortable: false,
      },
      {
        field: "country",
        type: "singleSelect",
        width: 120,
        valueOptions: [
          "بلغارستان",
          "لهستان",
          "فرانسه",
          "بریتانیا",
          "اسپانیا",
          "برزیل",
        ],
        headerName: "کشور",
        headerAlign: "left",
        align: "center",
        filterable: false,
      },
      {
        field: "discount",
        type: "singleSelect",
        width: 120,
        editable: true,
        valueOptions: ({ row }) => {
          if (row === undefined) {
            return ["ساکن اتحادیه اروپا", "تازه وارد"];
          }
          const options: string[] = [];
          if (!["United Kingdom", "Brazil"].includes(row.country)) {
            options.push("ساکن اتحادیه اروپا");
          }
          if (row.age < 27) {
            options.push("تازه وارد");
          }
          return options;
        },
        headerName: "تخفیف",
        headerAlign: "left",
        align: "center",
      },
      {
        field: "actions",
        type: "actions",
        minWidth: 100,
        headerName: "دسترسی‌ها",
        disableExport: true,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon color="info" />}
            label="ویرایش"
            onClick={toggleAdmin(params.id)}
          />,
          <DeleteUserActionItem
            label="حذف"
            icon={<DeleteIcon color="error" />}
            deleteUser={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="تغییر دسترسی"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="کپی کاربر"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
        headerAlign: "left",
        align: "center",
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  );

  return (
    <div
      className="mx-auto mt-5 w-full px-2 md:mt-10 md:max-w-5xl"
      style={{ height: 500 }}
    >
      <DataGrid
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        columns={columns}
        rows={rows}
        slots={{
          toolbar: CustomToolbar,
        }}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        filterMode="server"
        sortingMode="server"
        onFilterModelChange={(e) => console.log(e)}
        onSortModelChange={(e) => console.log(e)}
        sx={{
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#eeeeee", // Light gray for odd rows
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#ffffff", // White for even rows
          },
        }}
      />
    </div>
  );
}
