import React from "react";

import * as Icon from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "boron-ui/Icon",
  component: Icon.IconAccount,
};

const icons: { name: string; jsx: React.ReactNode }[] = [
  { name: "IconAccount", jsx: <Icon.IconAccount /> },
  { name: "IconActionComment", jsx: <Icon.IconActionComment /> },
  { name: "IconActionCommentDefault", jsx: <Icon.IconActionCommentDefault /> },
  {
    name: "IconActionCommentSelected",
    jsx: <Icon.IconActionCommentSelected />,
  },
  { name: "IconActionLike", jsx: <Icon.IconActionLike /> },
  { name: "IconActionLikeDefault", jsx: <Icon.IconActionLikeDefault /> },
  { name: "IconActionLikeSelected", jsx: <Icon.IconActionLikeSelected /> },
  { name: "IconActionTemplate", jsx: <Icon.IconActionTemplate /> },
  { name: "IconAllMessage", jsx: <Icon.IconAllMessage /> },
  { name: "IconAnalytics", jsx: <Icon.IconAnalytics /> },
  { name: "IconArchive", jsx: <Icon.IconArchive /> },
  { name: "IconArrowBack", jsx: <Icon.IconArrowBack /> },
  { name: "IconArrowClose", jsx: <Icon.IconArrowClose /> },
  { name: "IconArrowDown", jsx: <Icon.IconArrowDown /> },
  { name: "IconArrowDropDown", jsx: <Icon.IconArrowDropDown /> },
  { name: "IconArrowDropUp", jsx: <Icon.IconArrowDropUp /> },
  { name: "IconArrowLeft", jsx: <Icon.IconArrowLeft /> },
  { name: "IconArrowOpen", jsx: <Icon.IconArrowOpen /> },
  { name: "IconArrowRateDown", jsx: <Icon.IconArrowRateDown /> },
  { name: "IconArrowRateStay", jsx: <Icon.IconArrowRateStay /> },
  { name: "IconArrowRateUp", jsx: <Icon.IconArrowRateUp /> },
  { name: "IconArrowRight", jsx: <Icon.IconArrowRight /> },
  { name: "IconArrowUp", jsx: <Icon.IconArrowUp /> },
  { name: "IconAttention", jsx: <Icon.IconAttention /> },
  { name: "IconAttention2", jsx: <Icon.IconAttention2 /> },
  { name: "IconAttention3", jsx: <Icon.IconAttention3 /> },
  { name: "IconBatch", jsx: <Icon.IconBatch /> },
  { name: "IconCalendar", jsx: <Icon.IconCalendar /> },
  { name: "IconCheck", jsx: <Icon.IconCheck /> },
  { name: "IconCheckboxChecked", jsx: <Icon.IconCheckboxChecked /> },
  { name: "IconCheckboxDisabled", jsx: <Icon.IconCheckboxDisabled /> },
  { name: "IconCheckboxHyphen", jsx: <Icon.IconCheckboxHyphen /> },
  { name: "IconCheckboxNone", jsx: <Icon.IconCheckboxNone /> },
  { name: "IconCloseX", jsx: <Icon.IconCloseX /> },
  { name: "IconComment", jsx: <Icon.IconComment /> },
  { name: "IconContentList", jsx: <Icon.IconContentList /> },
  { name: "IconContentsAdd", jsx: <Icon.IconContentsAdd /> },
  { name: "IconDashboard", jsx: <Icon.IconDashboard /> },
  { name: "IconDoor", jsx: <Icon.IconDoor /> },
  { name: "IconDoorOpen", jsx: <Icon.IconDoorOpen /> },
  { name: "IconDragIndicator", jsx: <Icon.IconDragIndicator /> },
  { name: "IconDuplicate", jsx: <Icon.IconDuplicate /> },
  { name: "IconEdit", jsx: <Icon.IconEdit /> },
  { name: "IconEllipsis", jsx: <Icon.IconEllipsis /> },
  { name: "IconEmail", jsx: <Icon.IconEmail /> },
  { name: "IconExternalLink", jsx: <Icon.IconExternalLink /> },
  { name: "IconEye", jsx: <Icon.IconEye /> },
  { name: "IconFailed", jsx: <Icon.IconFailed /> },
  { name: "IconFile", jsx: <Icon.IconFile /> },
  { name: "IconFolderLevel1", jsx: <Icon.IconFolderLevel1 /> },
  { name: "IconFolderLevel2", jsx: <Icon.IconFolderLevel2 /> },
  { name: "IconGuardian", jsx: <Icon.IconGuardian /> },
  { name: "IconGuardianMessage", jsx: <Icon.IconGuardianMessage /> },
  { name: "IconHelp", jsx: <Icon.IconHelp /> },
  { name: "IconHelpSupport", jsx: <Icon.IconHelpSupport /> },
  { name: "IconHome", jsx: <Icon.IconHome /> },
  { name: "IconImportBookshelf", jsx: <Icon.IconImportBookshelf /> },
  { name: "IconImportMaterial", jsx: <Icon.IconImportMaterial /> },
  { name: "IconImportSeiseki", jsx: <Icon.IconImportSeiseki /> },
  { name: "IconImportStudent", jsx: <Icon.IconImportStudent /> },
  { name: "IconImportStudenttag", jsx: <Icon.IconImportStudenttag /> },
  { name: "IconImportTag", jsx: <Icon.IconImportTag /> },
  { name: "IconKarte", jsx: <Icon.IconKarte /> },
  { name: "IconLine", jsx: <Icon.IconLine /> },
  { name: "IconLineStop", jsx: <Icon.IconLineStop /> },
  { name: "IconMemo", jsx: <Icon.IconMemo /> },
  { name: "IconMessage", jsx: <Icon.IconMessage /> },
  { name: "IconNaviAvatar", jsx: <Icon.IconNaviAvatar /> },
  { name: "IconNaviMenu", jsx: <Icon.IconNaviMenu /> },
  { name: "IconNaviMenuClose", jsx: <Icon.IconNaviMenuClose /> },
  { name: "IconNaviSchool", jsx: <Icon.IconNaviSchool /> },
  { name: "IconNotice", jsx: <Icon.IconNotice /> },
  { name: "IconNoticeAssistant", jsx: <Icon.IconNoticeAssistant /> },
  { name: "IconNoticeBot", jsx: <Icon.IconNoticeBot /> },
  { name: "IconNoticeComment", jsx: <Icon.IconNoticeComment /> },
  { name: "IconNoticeMail", jsx: <Icon.IconNoticeMail /> },
  { name: "IconNoticeMailMute", jsx: <Icon.IconNoticeMailMute /> },
  { name: "IconNoticeSmarttag", jsx: <Icon.IconNoticeSmarttag /> },
  { name: "IconNoticeUser", jsx: <Icon.IconNoticeUser /> },
  { name: "IconOptionMenu", jsx: <Icon.IconOptionMenu /> },
  { name: "IconPictureImg", jsx: <Icon.IconPictureImg /> },
  { name: "IconPin", jsx: <Icon.IconPin /> },
  { name: "IconPlace", jsx: <Icon.IconPlace /> },
  { name: "IconPlanning", jsx: <Icon.IconPlanning /> },
  { name: "IconPlanningTimelist", jsx: <Icon.IconPlanningTimelist /> },
  { name: "IconPlus", jsx: <Icon.IconPlus /> },
  { name: "IconPlusTag", jsx: <Icon.IconPlusTag /> },
  { name: "IconPrinter", jsx: <Icon.IconPrinter /> },
  { name: "IconQr", jsx: <Icon.IconQr /> },
  { name: "IconRadioDefault", jsx: <Icon.IconRadioDefault /> },
  { name: "IconRadioSelected", jsx: <Icon.IconRadioSelected /> },
  { name: "IconRecord", jsx: <Icon.IconRecord /> },
  { name: "IconReplacement", jsx: <Icon.IconReplacement /> },
  { name: "IconReturn", jsx: <Icon.IconReturn /> },
  { name: "IconSchool", jsx: <Icon.IconSchool /> },
  { name: "IconSchoolMini", jsx: <Icon.IconSchoolMini /> },
  { name: "IconSearch", jsx: <Icon.IconSearch /> },
  { name: "IconSetting", jsx: <Icon.IconSetting /> },
  { name: "IconSetupDocument", jsx: <Icon.IconSetupDocument /> },
  { name: "IconSmartAction", jsx: <Icon.IconSmartAction /> },
  { name: "IconStaff", jsx: <Icon.IconStaff /> },
  { name: "IconStudents", jsx: <Icon.IconStudents /> },
  { name: "IconStudentsPlus", jsx: <Icon.IconStudentsPlus /> },
  { name: "IconStudentsStop", jsx: <Icon.IconStudentsStop /> },
  { name: "IconSuccess", jsx: <Icon.IconSuccess /> },
  { name: "IconSync", jsx: <Icon.IconSync /> },
  { name: "IconTableSort", jsx: <Icon.IconTableSort /> },
  { name: "IconTags", jsx: <Icon.IconTags /> },
  { name: "IconTemplate", jsx: <Icon.IconTemplate /> },
  { name: "IconTextbook", jsx: <Icon.IconTextbook /> },
  { name: "IconTextbooks", jsx: <Icon.IconTextbooks /> },
  { name: "IconTimeline", jsx: <Icon.IconTimeline /> },
  { name: "IconToggleOff", jsx: <Icon.IconToggleOff /> },
  { name: "IconToggleOn", jsx: <Icon.IconToggleOn /> },
  { name: "IconTrash", jsx: <Icon.IconTrash /> },
  { name: "IconVideo", jsx: <Icon.IconVideo /> },
  { name: "IconWarning", jsx: <Icon.IconWarning /> },
  { name: "IconZoom", jsx: <Icon.IconZoom /> },
];

export const Icons = () => (
  <div className="flex flex-wrap gap-6 text-blue-400 p-4 bg-white">
    {icons.map(({ jsx, name }, i) => {
      return (
        <div
          key={`icon-${i}`}
          className="flex flex-col items-center border h-[12rem] min-w-[10rem] border-blue-200 p-4 rounded-sm"
        >
          <div className="flex-1 flex items-center">{jsx}</div>
          <p className="pt-2">{name}</p>
        </div>
      );
    })}
  </div>
);
