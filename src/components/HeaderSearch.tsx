import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = () => {
    return (
        <TextField
            label="RPF No. / Voucher ID / Any ID"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{ borderRadius: 4 }}
        />
    );
};

export default HeaderSearch;
