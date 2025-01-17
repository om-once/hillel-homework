import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
const ResumeItem = ({ text }) => {
	return (
		<ListItem>
			<ListItemIcon>
				<FiberManualRecordOutlinedIcon />
			</ListItemIcon>
			<ListItemText primary={text} sx={{ color: 'text.secondary' }} />
		</ListItem>
	);
};

export default ResumeItem;
