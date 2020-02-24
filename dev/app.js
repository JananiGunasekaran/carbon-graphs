import "@babel/polyfill";
import renderSiteApp from "@cerner/carbon-site-helpers";
import "../src/main/less/carbon.less";
import "./app.less";
import {
    renderBarDefault,
    renderBarDefaultWithGoal,
    renderBarGroup,
    renderBarGroupWithGoal,
    renderBarNegative,
    renderBarStacked,
    renderBarStackedWithGoal,
    renderBarTimeSeries,
    renderBarTimeSeriesWithDateline,
    renderBarTimeSeriesXOrientationTop,
    renderSimpleBarAxisInfoTextLabels,
    renderStackedBarAxisInfoTextLabels,
    renderBarTimeSeriesWithEventline,
    renderBarWithPanning
} from "./examples/controls/bar";
import { renderColorsExample } from "./examples/controls/colors";
import {
    renderCombinationBar,
    renderCombinationRegion,
    renderCombinationSimple,
    renderCombinationIdenticalDatasetRegion
} from "./examples/controls/combination";
import {
    renderCriticalityLineSimple,
    renderCriticalityMultiLine,
    renderCriticalityMultiPairedResult,
    renderCriticalityPairedResultSimple,
    renderCriticalityTimeline,
    renderCriticalityScatter
} from "./examples/controls/criticality";
import {
    renderGantt,
    renderGanttAction,
    renderGanttActivities,
    renderGanttCustomContainerPadding,
    renderGanttCustomContentPadding,
    renderGanttDateTimeBuckets,
    renderGanttEvents,
    renderGanttPercentage,
    renderGanttStyle,
    renderGanttTrackSelection,
    renderGanttTruncate,
    renderGanttPanning,
    renderGanttEventline
} from "./examples/controls/gantt";
import {
    renderRegionLine,
    renderLine,
    renderLineBlankDataPoint,
    renderLineDateTimeBuckets,
    renderLineGridHHidden,
    renderLineGridVHidden,
    renderLineLabelHidden,
    renderLineLegendHidden,
    renderLineLegendItemDisabled,
    renderLineLegendTo,
    renderLineRegionMultiple,
    renderLineRegionNoLower,
    renderLineRegionNoUpper,
    renderLineRegionSimple,
    renderLineRegionY2,
    renderLineShapesHidden,
    renderLineTimeSeries,
    renderLineWithDateline,
    renderLineXAlternateLocale,
    renderLineXAxisFormatted,
    renderLineXHidden,
    renderLineXOrientationTop,
    renderLineXStaticTicks,
    renderLineY2Axis,
    renderLineYHidden,
    renderMultiLine,
    renderMultiLineRegion,
    renderMultiLineIdenticalDatasetRegion,
    renderNoDataView,
    renderLineCustomContainerPadding,
    renderLineCustomContentPadding,
    renderLineWithPanning,
    renderLineY2AxisWithPanning,
    renderLineWithEventline,
    renderDashedLine
} from "./examples/controls/line";
import {
    renderMultiPairedResultRegion,
    renderPairedResult,
    renderPairedResultDateTimeBuckets,
    renderPairedResultGridHHidden,
    renderPairedResultGridVHidden,
    renderPairedResultLabelHidden,
    renderPairedResultLegendHidden,
    renderPairedResultLegendItemDisabled,
    renderPairedResultRegionSimple,
    renderPairedResultTimeseries,
    renderPairedResultTimeseriesDateline,
    renderPairedResultXAlternateLocale,
    renderPairedResultXAxisFormatted,
    renderPairedResultXHidden,
    renderPairedResultXOrientationTop,
    renderPairedResultXStaticTicks,
    renderPairedResultY2Axis,
    renderPairedResultYHidden,
    renderPairedResultWithPanning,
    renderPairedResultY2AxisWithPanning,
    renderPairedResultTimeseriesEventline
} from "./examples/controls/pairedResult";
import { renderPieLegendTo, renderPieSimple } from "./examples/controls/pie";
import {
    renderCriticalityShapes,
    renderFillTypes,
    renderShapesSimple,
    renderShapesSimpleLight,
    renderCriticalityShapesLight
} from "./examples/controls/shapes";
import { renderSplineLine } from "./examples/controls/spline";
import {
    renderTimeline,
    renderTimelineCustomContainerPadding,
    renderTimelineCustomContentPadding,
    renderTimelinePanning,
    renderTimelineNoXAxisTickLabel
} from "./examples/controls/timeline";
import { createElementLegendBindTo } from "./examples/helpers";
import {
    renderScatter,
    renderScatterY2Axis,
    renderScatterTimeSeries,
    renderScatterWithDateline,
    renderScatterXHidden,
    renderScatterYHidden,
    renderScatterWithPanning,
    renderScatterY2AxisWithPanning,
    renderScatterWithEventline
} from "./examples/controls/scatter";
import {
    renderSimpleBubble,
    renderWeightBasedBubbleGraph,
    renderColorBasedBubbleGraph,
    renderWeightColorCombination,
    renderCustomBubbleSize
} from "./examples/controls/bubble";

renderSiteApp(
    [
        {
            pathname: "/line",
            children: [
                {
                    pathname: "/line/simple",
                    content: renderLine,
                    title: "Simple"
                },
                {
                    pathname: "/line/timeseries",
                    content: renderLineTimeSeries,
                    title: "Timeseries"
                },
                {
                    pathname: "/line/timeseries-dateline",
                    content: renderLineWithDateline,
                    title: "Timeseries With Dateline"
                },
                {
                    pathname: "/line/eventline",
                    content: renderLineWithEventline,
                    title: "Timeseries With Eventline"
                },
                {
                    pathname: "/line/y2-axis",
                    content: renderLineY2Axis,
                    title: "Y2 Axis"
                },
                {
                    pathname: "/line/label-hidden",
                    content: renderLineLabelHidden,
                    title: "Label Hidden"
                },
                {
                    pathname: "/line/legend-hidden",
                    content: renderLineLegendHidden,
                    title: "Legend Hidden"
                },
                {
                    pathname: "/line/custom-legend-placement",
                    content: (id) => {
                        createElementLegendBindTo(id);
                        return renderLineLegendTo(id);
                    },
                    title: "Custom Legend Placement"
                },
                {
                    pathname: "/line/legend-item-disabled",
                    content: renderLineLegendItemDisabled,
                    title: "Legend Item Disabled"
                },
                {
                    pathname: "/line/shapes-hidden",
                    content: renderLineShapesHidden,
                    title: "Shapes Hidden"
                },
                {
                    pathname: "/line/no-data",
                    content: renderNoDataView,
                    title: "No Data"
                },
                {
                    pathname: "/line/dashed-line",
                    content: renderDashedLine,
                    title: "Dashed Line"
                }
            ]
        },
        {
            pathname: "/multi-line",
            children: [
                {
                    pathname: "/multi-line/simple",
                    content: renderMultiLine,
                    title: "Simple"
                }
            ]
        },
        {
            pathname: "/spline",
            children: [
                {
                    pathname: "/spline/simple",
                    content: renderSplineLine,
                    title: "Simple"
                }
            ]
        },
        {
            pathname: "/non-contiguous-line",
            children: [
                {
                    pathname: "/non-contiguous-line/simple",
                    content: renderLineBlankDataPoint,
                    title: "Simple"
                }
            ]
        },
        {
            pathname: "/paired-result",
            children: [
                {
                    pathname: "/paired-result/simple",
                    content: renderPairedResult,
                    title: "Simple"
                },
                {
                    pathname: "/paired-result/timeseries",
                    content: renderPairedResultTimeseries,
                    title: "Timeseries"
                },
                {
                    pathname: "/paired-result/timeseries-dateline",
                    content: renderPairedResultTimeseriesDateline,
                    title: "Timeseries With Dateline"
                },
                {
                    pathname: "/paired-result/timeseries-eventline",
                    content: renderPairedResultTimeseriesEventline,
                    title: "Timeseries With Eventline"
                },
                {
                    pathname: "/paired-result/y2-axis",
                    content: renderPairedResultY2Axis,
                    title: "Y2 Axis"
                },
                {
                    pathname: "/paired-result/label-hidden",
                    content: renderPairedResultLabelHidden,
                    title: "Label Hidden"
                },
                {
                    pathname: "/paired-result/legend-hidden",
                    content: renderPairedResultLegendHidden,
                    title: "Legend Hidden"
                },
                {
                    pathname: "/paired-result/legend-item-disabled",
                    content: renderPairedResultLegendItemDisabled,
                    title: "Legend Item Disabled"
                }
            ]
        },
        {
            pathname: "/bar",
            children: [
                {
                    pathname: "/bar/simple",
                    content: renderBarDefault,
                    title: "Simple"
                },
                {
                    pathname: "/bar/timeseries",
                    content: renderBarTimeSeries,
                    title: "Timeseries"
                },
                {
                    pathname: "/bar/timeseries-dateline",
                    content: renderBarTimeSeriesWithDateline,
                    title: "Timeseries With Dateline"
                },
                {
                    pathname: "/bar/timeseries-eventline",
                    content: renderBarTimeSeriesWithEventline,
                    title: "Timeseries With Eventline"
                },
                {
                    pathname: "/bar/grouped-bars",
                    content: renderBarGroup,
                    title: "Grouped bars"
                },
                {
                    pathname: "/bar/stacked-bars",
                    content: renderBarStacked,
                    title: "Stacked bars"
                },
                {
                    pathname: "/bar/negative-bars",
                    content: renderBarNegative,
                    title: "Negative bars"
                },
                {
                    pathname: "/bar/axis-info-text-labels",
                    content: renderSimpleBarAxisInfoTextLabels,
                    title: "Axis Info Text Labels"
                },
                {
                    pathname: "/bar/stacked-axis-info-text-labels",
                    content: renderStackedBarAxisInfoTextLabels,
                    title: "Stacked - Axis Info Text Labels"
                }
            ]
        },
        {
            pathname: "/scatter",
            children: [
                {
                    pathname: "/scatter/simple",
                    content: renderScatter,
                    title: "Simple"
                },
                {
                    pathname: "/scatter/y2-axis",
                    content: renderScatterY2Axis,
                    title: "Y2 Axis"
                },
                {
                    pathname: "/scatter/timeseries",
                    content: renderScatterTimeSeries,
                    title: "Timeseries"
                },
                {
                    pathname: "/scatter/timeseries-dateline",
                    content: renderScatterWithDateline,
                    title: "Timeseries With Dateline"
                },
                {
                    pathname: "/scatter/timeseries-eventline",
                    content: renderScatterWithEventline,
                    title: "Timeseries With Eventline"
                }
            ]
        },
        {
            pathname: "/bubble",
            children: [
                {
                    pathname: "/bubble/simple",
                    content: renderSimpleBubble,
                    title: "Simple"
                },
                {
                    pathname: "/bubble/weight-based",
                    content: renderWeightBasedBubbleGraph,
                    title: "Weight Based"
                },
                {
                    pathname: "/bubble/color-based",
                    content: renderColorBasedBubbleGraph,
                    title: "Color Based"
                },
                {
                    pathname: "/bubble/weight-color-combination",
                    content: renderWeightColorCombination,
                    title: "Weight and Color Combination"
                },
                {
                    pathname: "/bubble/custom-bubble-size",
                    content: renderCustomBubbleSize,
                    title: "Custom Bubble size"
                }
            ]
        },
        {
            pathname: "/combination",
            children: [
                {
                    pathname: "/combination/simple",
                    content: renderCombinationSimple,
                    title: "Simple"
                },
                {
                    pathname: "/combination/bar-graph-with-line",
                    content: renderCombinationBar,
                    title: "Bar Graph With Line"
                }
            ]
        },
        {
            pathname: "/gantt",
            children: [
                {
                    pathname: "/gantt/simple",
                    content: renderGantt,
                    title: "Simple"
                },
                {
                    pathname: "/gantt/tasks-and-activities",
                    content: renderGanttActivities,
                    title: "Tasks and Activities"
                },
                {
                    pathname: "/gantt/percentage",
                    content: renderGanttPercentage,
                    title: "Percentage"
                },
                {
                    pathname: "/gantt/eventline",
                    content: renderGanttEventline,
                    title: "Eventline"
                },
                {
                    pathname: "/gantt/actions",
                    content: renderGanttAction,
                    title: "Actions"
                },
                {
                    pathname: "/gantt/events",
                    content: renderGanttEvents,
                    title: "Events"
                },
                {
                    pathname: "/gantt/track-selection",
                    content: renderGanttTrackSelection,
                    title: "Track Selection"
                },
                {
                    pathname: "/gantt/bar-types",
                    content: renderGanttStyle,
                    title: "Bar types"
                },
                {
                    pathname: "/gantt/label-truncation",
                    content: renderGanttTruncate,
                    title: "Label Truncation"
                }
            ]
        },
        {
            pathname: "/timeline",
            children: [
                {
                    pathname: "/timeline/simple",
                    content: renderTimeline,
                    title: "Simple"
                }
            ]
        },
        {
            pathname: "/pie",
            children: [
                {
                    pathname: "/pie/simple",
                    content: renderPieSimple,
                    title: "Simple"
                },
                {
                    pathname: "/pie/custom-legend-placement",
                    content: (id) => {
                        createElementLegendBindTo(id);
                        return renderPieLegendTo(id);
                    },
                    title: "Custom Legend Placement"
                }
            ]
        },
        {
            pathname: "/panning",
            children: [
                {
                    pathname: "/panning/line",
                    children: [
                        {
                            pathname: "/panning/line/simple",
                            content: renderLineWithPanning,
                            title: "Simple"
                        },
                        {
                            pathname: "/panning/line/y2-axis",
                            content: renderLineY2AxisWithPanning,
                            title: "Y2 Axis"
                        }
                    ]
                },
                {
                    pathname: "/panning/gantt",
                    children: [
                        {
                            pathname: "/panning/gantt/simple",
                            content: renderGanttPanning,
                            title: "Simple"
                        }
                    ]
                },
                {
                    pathname: "/panning/timeline",
                    children: [
                        {
                            pathname: "/panning/timeline/simple",
                            content: renderTimelinePanning,
                            title: "Simple"
                        }
                    ]
                },
                {
                    pathname: "/panning/bar",
                    children: [
                        {
                            pathname: "/panning/bar/simple",
                            content: renderBarWithPanning,
                            title: "Simple"
                        }
                    ]
                },
                {
                    pathname: "/panning/paired-result",
                    children: [
                        {
                            pathname: "/panning/paired-result/simple",
                            content: renderPairedResultWithPanning,
                            title: "Simple"
                        },
                        {
                            pathname: "/panning/paired-result/y2-axis",
                            content: renderPairedResultY2AxisWithPanning,
                            title: "Y2 Axis"
                        }
                    ]
                },
                {
                    pathname: "/panning/scatter",
                    children: [
                        {
                            pathname: "/panning/scatter/simple",
                            content: renderScatterWithPanning,
                            title: "Simple"
                        },
                        {
                            pathname: "/panning/scatter/y2-axis",
                            content: renderScatterY2AxisWithPanning,
                            title: "Y2 Axis"
                        }
                    ]
                }
            ]
        },
        {
            pathname: "/grid",
            children: [
                {
                    pathname: "/grid/line",
                    children: [
                        {
                            pathname: "/grid/line/horizontal-grid-hidden",
                            content: renderLineGridHHidden,
                            title: "Horizontal Grid Hidden"
                        },
                        {
                            pathname: "/grid/line/vertical-grid-hidden",
                            content: renderLineGridVHidden,
                            title: "Vertical Grid Hidden"
                        }
                    ]
                },
                {
                    pathname: "/grid/paired-result",
                    children: [
                        {
                            pathname:
                                "/grid/paired-result/horizontal-grid-hidden",
                            content: renderPairedResultGridHHidden,
                            title: "Horizontal Grid Hidden"
                        },
                        {
                            pathname:
                                "/grid/paired-result/vertical-grid-hidden",
                            content: renderPairedResultGridVHidden,
                            title: "Vertical Grid Hidden"
                        }
                    ]
                }
            ]
        },
        {
            pathname: "/axes",
            children: [
                {
                    pathname: "/axes/line",
                    children: [
                        {
                            pathname: "/axes/line/x-axis-hidden",
                            content: renderLineXHidden,
                            title: "X Axis Hidden"
                        },
                        {
                            pathname: "/axes/line/y-axis-hidden",
                            content: renderLineYHidden,
                            title: "Y Axis Hidden"
                        },
                        {
                            pathname: "/axes/line/static-x-axis-ticks",
                            content: renderLineXStaticTicks,
                            title: "Static X Axis Ticks"
                        },
                        {
                            pathname: "/axes/line/x-axis-ticks-formatted",
                            content: renderLineXAxisFormatted,
                            title: "X Axis Ticks Formatted"
                        },
                        {
                            pathname: "/axes/line/x-axis-alternate-locale",
                            content: renderLineXAlternateLocale,
                            title: "X Axis Alternate Locale"
                        },
                        {
                            pathname: "/axes/line/datetime-buckets",
                            content: renderLineDateTimeBuckets,
                            title: "Datetime Buckets"
                        },
                        {
                            pathname: "/axes/line/x-axis-orientation-top",
                            content: renderLineXOrientationTop,
                            title: "X Axis Orientation Top"
                        }
                    ]
                },
                {
                    pathname: "/axes/paired-result",
                    children: [
                        {
                            pathname: "/axes/paired-result/x-axis-hidden",
                            content: renderPairedResultXHidden,
                            title: "X Axis Hidden"
                        },
                        {
                            pathname: "/axes/paired-result/y-axis-hidden",
                            content: renderPairedResultYHidden,
                            title: "Y Axis Hidden"
                        },
                        {
                            pathname: "/axes/paired-result/static-x-axis-ticks",
                            content: renderPairedResultXStaticTicks,
                            title: "Static X Axis Ticks"
                        },
                        {
                            pathname:
                                "/axes/paired-result/x-axis-ticks-formatted",
                            content: renderPairedResultXAxisFormatted,
                            title: "X Axis Ticks Formatted"
                        },
                        {
                            pathname:
                                "/axes/paired-result/x-axis-alternate-locale",
                            content: renderPairedResultXAlternateLocale,
                            title: "X Axis Alternate Locale"
                        },
                        {
                            pathname: "/axes/paired-result/datetime-buckets",
                            content: renderPairedResultDateTimeBuckets,
                            title: "Datetime Buckets"
                        },
                        {
                            pathname:
                                "/axes/paired-result/x-axis-orientation-top",
                            content: renderPairedResultXOrientationTop,
                            title: "X Axis Orientation Top"
                        }
                    ]
                },
                {
                    pathname: "/axes/gantt",
                    children: [
                        {
                            pathname: "/axes/gantt/datetime-buckets",
                            content: renderGanttDateTimeBuckets,
                            title: "Datetime Buckets"
                        }
                    ]
                },
                {
                    pathname: "/axes/bar",
                    children: [
                        {
                            pathname: "/axes/bar/x-axis-orientation-top",
                            content: renderBarTimeSeriesXOrientationTop,
                            title: "X Axis Orientation Top"
                        }
                    ]
                },
                {
                    pathname: "/axes/timeline",
                    children: [
                        {
                            pathname:
                                "/axes/timeline/x-axis-without-tick-label",
                            content: renderTimelineNoXAxisTickLabel,
                            title: "X Axis Without Tick Label"
                        }
                    ]
                },
                {
                    pathname: "/axes/scatter",
                    children: [
                        {
                            pathname: "/axes/scatter/x-axis-hidden",
                            content: renderScatterXHidden,
                            title: "X Axis Hidden"
                        },
                        {
                            pathname: "/axes/scatter/y-axis-hidden",
                            content: renderScatterYHidden,
                            title: "Y Axis Hidden"
                        }
                    ]
                }
            ]
        },
        {
            pathname: "/regions",
            children: [
                {
                    pathname: "/regions/line",
                    children: [
                        {
                            pathname: "/regions/line/simple",
                            content: renderLineRegionSimple,
                            title: "Simple"
                        },
                        {
                            pathname: "/regions/line/multiple-line",
                            content: renderMultiLineRegion,
                            title: "Multiple line"
                        },
                        {
                            pathname: "/regions/line/multiple-regions",
                            content: renderLineRegionMultiple,
                            title: "Multiple Regions"
                        },
                        {
                            pathname: "/regions/line/region-line",
                            content: renderRegionLine,
                            title: "Region-line"
                        },
                        {
                            pathname: "/regions/line/with-y2-axis",
                            content: renderLineRegionY2,
                            title: "With Y2 Axis"
                        },
                        {
                            pathname: "/regions/line/no-lower-bound",
                            content: renderLineRegionNoLower,
                            title: "No Lower Bound"
                        },
                        {
                            pathname: "/regions/line/no-upper-bound",
                            content: renderLineRegionNoUpper,
                            title: "No Upper Bound"
                        }
                    ]
                },
                {
                    pathname: "/regions/multi-line",
                    children: [
                        {
                            pathname: "/regions/multi-line/identical",
                            content: renderMultiLineIdenticalDatasetRegion,
                            title: "Dataset Region Identical"
                        }
                    ]
                },
                {
                    pathname: "/regions/paired-result",
                    children: [
                        {
                            pathname: "/regions/paired-result/simple",
                            content: renderPairedResultRegionSimple,
                            title: "Simple"
                        },
                        {
                            pathname:
                                "/regions/paired-result/multiple-paired-result",
                            content: renderMultiPairedResultRegion,
                            title: "Multiple Paired Result"
                        }
                    ]
                },
                {
                    pathname: "/regions/bar",
                    children: [
                        {
                            pathname: "/regions/bar/goal-lines",
                            content: renderBarDefaultWithGoal,
                            title: "Goal lines"
                        },
                        {
                            pathname: "/regions/bar/grouped-goal-lines",
                            content: renderBarGroupWithGoal,
                            title: "Grouped - Goal lines"
                        },
                        {
                            pathname: "/regions/bar/stacked-goal-lines",
                            content: renderBarStackedWithGoal,
                            title: "Stacked - Goal lines"
                        }
                    ]
                },
                {
                    pathname: "/regions/combination",
                    children: [
                        {
                            pathname: "/regions/combination/simple",
                            content: renderCombinationRegion,
                            title: "Simple"
                        },
                        {
                            pathname: "/regions/combination/identical",
                            content: renderCombinationIdenticalDatasetRegion,
                            title: "Dataset Region Identical"
                        }
                    ]
                }
            ]
        },
        {
            pathname: "/criticality",
            children: [
                {
                    pathname: "/criticality/simple-line",
                    content: renderCriticalityLineSimple,
                    title: "Simple Line"
                },
                {
                    pathname: "/criticality/multi-line",
                    content: renderCriticalityMultiLine,
                    title: "Multiple Line"
                },
                {
                    pathname: "/criticality/simple-paired-result",
                    content: renderCriticalityPairedResultSimple,
                    title: "Simple Paired Result"
                },
                {
                    pathname: "/criticality/multi-paired-result",
                    content: renderCriticalityMultiPairedResult,
                    title: "Multiple Paired Result"
                },
                {
                    pathname: "/criticality/timeline",
                    content: renderCriticalityTimeline,
                    title: "Timeline"
                },
                {
                    pathname: "/criticality/scatter",
                    content: renderCriticalityScatter,
                    title: "Scatter"
                }
            ]
        },
        {
            pathname: "/styles",
            children: [
                {
                    pathname: "/styles/padding",
                    children: [
                        {
                            pathname: "/styles/padding/line",
                            children: [
                                {
                                    pathname:
                                        "/styles/padding/line/custom-container-padding",
                                    content: renderLineCustomContainerPadding,
                                    title: "Container Padding"
                                },
                                {
                                    pathname:
                                        "/styles/padding/line/custom-content-padding",
                                    content: renderLineCustomContentPadding,
                                    title: "Content Padding"
                                }
                            ]
                        },
                        {
                            pathname: "/styles/padding/gantt",
                            children: [
                                {
                                    pathname:
                                        "/styles/padding/gantt/custom-container-padding",
                                    content: renderGanttCustomContainerPadding,
                                    title: "Container Padding"
                                },
                                {
                                    pathname:
                                        "/styles/padding/gantt/custom-content-padding",
                                    content: renderGanttCustomContentPadding,
                                    title: "Content Padding"
                                }
                            ]
                        },
                        {
                            pathname: "/styles/padding/timeline",
                            children: [
                                {
                                    pathname:
                                        "/styles/padding/timeline/custom-container-padding",
                                    content: renderTimelineCustomContainerPadding,
                                    title: "Container Padding"
                                },
                                {
                                    pathname:
                                        "/styles/padding/timeline/custom-content-padding",
                                    content: renderTimelineCustomContentPadding,
                                    title: "Content Padding"
                                }
                            ]
                        }
                    ]
                },
                {
                    pathname: "/styles/shapes",
                    children: [
                        {
                            pathname: "/styles/shapes/standard",
                            content: renderShapesSimple,
                            title: "Standard"
                        },
                        {
                            pathname: "/styles/shapes/critical",
                            content: renderCriticalityShapes,
                            title: "Criticality"
                        },
                        {
                            pathname: "/styles/shapes/standard-light",
                            content: renderShapesSimpleLight,
                            title: "Standard - Light"
                        },
                        {
                            pathname: "/styles/shapes/critical-light",
                            content: renderCriticalityShapesLight,
                            title: "Criticality - Light"
                        },
                        {
                            pathname: "/styles/shapes/fills",
                            content: renderFillTypes,
                            title: "Rectangle Fill"
                        }
                    ]
                },
                {
                    pathname: "/styles/colors",
                    content: renderColorsExample,
                    title: "Colors"
                }
            ]
        }
    ],
    {
        gettingStartedLink: "#/line/simple",
        gitHubRepo: "https://github.com/cerner/carbon-graphs"
    }
);
