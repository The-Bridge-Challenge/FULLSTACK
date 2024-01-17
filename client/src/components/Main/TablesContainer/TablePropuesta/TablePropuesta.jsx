import React from "react";
import "./TablePropuesta.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../../PDF";

const TablePropuesta = ({
  inputConsumoAnual,
  inputConsumo,
  inputPotenciaContratada,
  inputPotenciaFacturada,
  valorOtrosMes,
  valorOtrosAnual,
}) => {
  return (
    <>
      <section>
        <table id="second_table">
          <thead>
            <tr>
              <th></th>
              <th className="article_title" colSpan={8}>
                Energía
              </th>
              <th className="article_title" colSpan={7}>
                Potencia
              </th>
            </tr>

            <tr>
              <th className="tr_inputs">FRANJA</th>
              <th className="tr_inputs">CONSUMO ANUAL (kWh)</th>
              <th className="tr_inputs">CONSUMO FACTURA ACTUAL (kWh)</th>
              <th className="tr_inputs">
                PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)
              </th>
              <th className="tr_inputs">
                PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)
              </th>
              <th className="tr_inputs">DESCUENTO(%)</th>
              <th className="tr_inputs">PRECIO CON DESCUENTO </th>
              <th className="tr_inputs">TOTAL PAGO EN FACTURA</th>
              <th className="tr_inputs">TOTAL PAGO ANUAL</th>

              <th className="tr_inputs">POTENCIA CONTRATADA (kW)</th>
              <th className="tr_inputs">POTENCIA FACTURADA (kW)</th>
              <th className="tr_inputs">PRECIOS POTENCIA (€/kW/día)</th>
              <th className="tr_inputs">DESCUENTO (%)</th>
              <th className="tr_inputs">PRECIO CON DESCUENTO</th>
              <th className="tr_inputs">TOTAL PAGO EN FACTURA </th>
              <th className="tr_inputs">TOTAL PAGO ANUAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td>{inputConsumoAnual.consumo_anual_p1}</td>
              <td>{inputConsumo.consumo_factura_p1}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p1}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p1}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P2</td>
              <td>{inputConsumoAnual.consumo_anual_p2}</td>
              <td>{inputConsumo.consumo_factura_p2}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p2}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p2}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P3</td>
              <td>{inputConsumoAnual.consumo_anual_p3}</td>
              <td>{inputConsumo.consumo_factura_p3}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p3}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p3}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P4</td>
              <td>{inputConsumoAnual.consumo_anual_p4}</td>
              <td>{inputConsumo.consumo_factura_p4}</td>
              <td> €</td>
              <td> €</td>
              <td> </td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p4}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p4}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td>P5</td>
              <td>{inputConsumoAnual.consumo_anual_p5}</td>
              <td>{inputConsumo.consumo_factura_p5}</td>
              <td> €</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>

              <td>{inputPotenciaContratada.potencia_contratada_p5}</td>
              <td>{inputPotenciaFacturada.potencia_facturada_p5}</td>
              <td> €</td>
              <td></td>
              <td> €</td>
              <td> €</td>
              <td> €</td>
            </tr>

            <tr>
              <td className="td_radius">p6</td>
              <td className="td_radius">
                {inputConsumoAnual.consumo_anual_p6}
              </td>
              <td className="td_radius">{inputConsumo.consumo_factura_p6}</td>
              <td className="td_radius"> €</td>
              <td className="td_radius"> €</td>
              <td className="td_radius"></td>
              <td className="td_radius"> €</td>
              <td className="td_radius"> €</td>
              <td className="td_radius"> €</td>

              <td className="td_radius">
                {inputPotenciaContratada.potencia_contratada_p6}
              </td>
              <td className="td_radius">
                {inputPotenciaFacturada.potencia_facturada_p6}
              </td>
              <td className="td_radius"> €</td>
              <td className="td_radius"></td>
              <td className="td_radius"> €</td>
              <td className="td_radius"> €</td>
              <td className="td_radius"> €</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="total_title">TOTAL</td>
              <td className="total_input">
                {inputConsumoAnual.consumo_anual_p1 +
                  inputConsumoAnual.consumo_anual_p2 +
                  inputConsumoAnual.consumo_anual_p3 +
                  inputConsumoAnual.consumo_anual_p4 +
                  inputConsumoAnual.consumo_anual_p5 +
                  inputConsumoAnual.consumo_anual_p6}
              </td>
              <td className="total_input">
                {inputConsumo.consumo_factura_p1 +
                  inputConsumo.consumo_factura_p2 +
                  inputConsumo.consumo_factura_p3 +
                  inputConsumo.consumo_factura_p4 +
                  inputConsumo.consumo_factura_p5 +
                  inputConsumo.consumo_factura_p6}
              </td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="total_input"> €</td>
              <td className="total_input"> €</td>

              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="empty_input"></td>
              <td className="total_input"> €</td>
              <td className="total_input"> €</td>
            </tr>
          </tfoot>
        </table>
      </section>
      <section>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>IMPUESTO ELÉCTRICO</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>IMPORTE TOTAL FACTURA</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section>
        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>OTROS</th>
                <td>{valorOtrosMes} €</td>
              </tr>
            </tbody>
          </table>

          <table border="1">
            <tbody>
              <tr>
                <th>OTROS ANUAL</th>
                <td>{valorOtrosAnual} €</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>
          <table border="1">
            <tbody>
              <tr>
                <th>TOTAL ANUAL ESTIMADO</th>
                <td> €</td>
              </tr>
            </tbody>
          </table>
        </article>
        <PDFDownloadLink document={<PDF />} fileName="Propuesta Several">
          <button>Descargar</button>
        </PDFDownloadLink>
      </section>
    </>
  );
};

export default TablePropuesta;
