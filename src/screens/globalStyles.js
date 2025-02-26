import { StyleSheet } from "react-native";
import { size } from "../utils/fonts";

const globalStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    directionRow: {
        flexDirection: 'row',
    },
    directionColumn: {
        flexDirection: 'column',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignSelf: {
        alignSelf: 'center',
    },
    w100: {
        width: "100%",
    },

    font9: {
        fontSize: size.xxxtiny,
    },
    font10: {
        fontSize: size.xxtiny,
    },
    font11: {
        fontSize: size.xtiny,
    },
    font12: {
        fontSize: size.tiny,
    },
    font13: {
        fontSize: size.xxsmall,
    },
    font14: {
        fontSize: size.xsmall,
    },
    font15: {
        fontSize: size.small,
    },
    font16: {
        fontSize: size.normal,
    },
    font17: {
        fontSize: size.medium,
    },
    font18: {
        fontSize: size.large,
    },
    font19: {
        fontSize: size.xlarge,
    },
    font20: {
        fontSize: size.xxlarge,
    },
    font22: {
        fontSize: size.h6,
    },
    font24: {
        fontSize: size.h5,
    },
    font25: {
        fontSize: size.h4,
    },
    font26: {
        fontSize: size.h3,
    },
    font28: {
        fontSize: size.h2,
    },
    font30: {
        fontSize: size.h1,
    },
    font32: {
        fontSize: size.title,
    },
    font34: {
        fontSize: size.xtitle,
    },
    font36: {
        fontSize: size.xxtitle,
    },
    font38: {
        fontSize: size.xxxtitle,
    },
    font50: {
        fontSize: size.huge,
    },
});

export default globalStyles;