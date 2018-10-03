import dymo from "http://www.labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.3.0.js"
(function () {
    // stores loaded label info
    var barcodeLabel;
    var label;
    var urlLink = 'www.stockandtrack.com'
    var titleText;
    var catText;

    // called when the document completly loaded
    function onload(title, cat, numb) {
        var printersSelect = document.getElementById('printersSelect');
        var printButton = document.getElementById('printButton');
        // var textTextArea = document.getElementById('textTextArea');
        urlLink = numb;
        titleText = title;
        cat = catText;
        this.printClick;
        // loads all supported printers into a combo box 
        function loadPrinters() {
            var printers = dymo.label.framework.getLabelWriterPrinters();
            if (printers.length == 0) {
                alert("No DYMO printers are installed. Install DYMO printers.");
                return;
            }

            for (var i = 0; i < printers.length; i++) {
                var printer = printers[i];

                var printerName = printer.name;

                var option = document.createElement('option');
                option.value = printerName;
                option.appendChild(document.createTextNode(printerName));
                printersSelect.appendChild(option);
            }
        }

        function printCLick() {
            try {
                if (!barcodeLabel)
                    throw "Load label before printing";

                if (!printersSelect.value)
                    throw "Select printer.";

                barcodeLabel.setObjectText('BARCODE', urlLink, 'Text', 'Stock and Track text description field');

                barcodeLabel.setObjectText("Text", this.catText); //change it with the description variable here. Just temporary. 

                barcodeLabel.setObjectText("Title Text", this.titleText); //change it with the real Container value here variable

                barcodeLabel.print(printersSelect.value);

            }
            catch (e) {
                alert(e.message || e);
            }
        }

        function getBarcodeLabelXml() {

            var labelXml = '<?xml version="1.0" encoding="utf-8"?>\
            <DieCutLabel Version="8.0" Units="twips" MediaType="Default">\
                <PaperOrientation>Portrait</PaperOrientation>\
                <Id>Small30334</Id>\
                <IsOutlined>false</IsOutlined>\
                <PaperName>30334 2-1/4 in x 1-1/4 in</PaperName>\
                <DrawCommands>\
                    <RoundRectangle X="0" Y="0" Width="3240" Height="1800" Rx="270" Ry="270" />\
                </DrawCommands>\
                <ObjectInfo>\
                    <TextObject>\
                        <Name>Title Text</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                        <LinkedObjectName />\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>False</IsVariable>\
                        <GroupID>-1</GroupID>\
                        <IsOutlined>False</IsOutlined>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Bottom</VerticalAlignment>\
                        <TextFitMode>ShrinkToFit</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                            <Element>\
                                <String xml:space="preserve">Container:</String>\
                                <Attributes>\
                                    <Font Family="Arial" Size="10" Bold="True" Italic="True" Underline="False" Strikeout="False" />\
                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                </Attributes>\
                            </Element>\
                        </StyledText>\
                    </TextObject>\
                    <Bounds X="178.000000000001" Y="1328.4645690918" Width="2863.77954101563" Height="160" />\
                </ObjectInfo>\
                <ObjectInfo>\
                    <TextObject>\
                        <Name>Text</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                        <LinkedObjectName />\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>True</IsVariable>\
                        <GroupID>-1</GroupID>\
                        <IsOutlined>False</IsOutlined>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>ShrinkToFit</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                            <Element>\
                                <String xml:space="preserve">Description:</String>\
                                <Attributes>\
                                    <Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                </Attributes>\
                            </Element>\
                        </StyledText>\
                    </TextObject>\
                    <Bounds X="1255.47241210937" Y="198.89770507813" Width="1927.52758789063" Height="1013.22836303711" />\
                </ObjectInfo>\
                <ObjectInfo>\
                    <BarcodeObject>\
                        <Name>BARCODE</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                        <LinkedObjectName />\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>False</IsVariable>\
                        <GroupID>-1</GroupID>\
                        <IsOutlined>False</IsOutlined>\
                        <Text>www.stockandtrack.com</Text>\
                        <Type>QRCode</Type>\
                        <Size>Large</Size>\
                        <TextPosition>None</TextPosition>\
                        <TextFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                        <CheckSumFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                        <TextEmbedding>None</TextEmbedding>\
                        <ECLevel>0</ECLevel>\
                        <HorizontalAlignment>Center</HorizontalAlignment>\
                        <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />\
                    </BarcodeObject>\
                    <Bounds X="58" Y="86" Width="1360" Height="1060" />\
                </ObjectInfo>\
                <ObjectInfo>\
                    <TextObject>\
                        <Name>TEXT</Name>\
                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                        <LinkedObjectName />\
                        <Rotation>Rotation0</Rotation>\
                        <IsMirrored>False</IsMirrored>\
                        <IsVariable>False</IsVariable>\
                        <GroupID>-1</GroupID>\
                        <IsOutlined>False</IsOutlined>\
                        <HorizontalAlignment>Left</HorizontalAlignment>\
                        <VerticalAlignment>Top</VerticalAlignment>\
                        <TextFitMode>ShrinkToFit</TextFitMode>\
                        <UseFullFontHeight>True</UseFullFontHeight>\
                        <Verticalized>False</Verticalized>\
                        <StyledText>\
                            <Element>\
                                <String xml:space="preserve">www.stockandtrack.com</String>\
                                <Attributes>\
                                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                </Attributes>\
                            </Element>\
                        </StyledText>\
                    </TextObject>\
                    <Bounds X="1023" Y="1593" Width="1190" Height="120" />\
                </ObjectInfo>\
            </DieCutLabel>';
            return labelXml;
        }

        function loadLabelFromWeb() {
            // use jQuery API to load labels

            //$.get("Barcode.label", function(labelXml)
            //{
            barcodeLabel = dymo.label.framework.openLabelXml(getBarcodeLabelXml());

            //}, "text");

            //$.get("BarcodeAsImage.label", function(labelXml)
            //{
            // barcodeAsImageLabel = dymo.label.framework.openLabelXml(getBarcodeAsImageLabelXml());
            //}, "text");
        }

        loadLabelFromWeb();

        // load printers list on startup
        loadPrinters();
    };

    function initTests() {
        if (dymo.label.framework.init) {
            //dymo.label.framework.trace = true;
            dymo.label.framework.init(onload);
        } else {
            onload();
        }
    }

    // register onload event
    if (window.addEventListener)
        window.addEventListener("load", initTests, false);
    else if (window.attachEvent)
        window.attachEvent("onload", initTests);
    else
        window.onload = initTests;

}());