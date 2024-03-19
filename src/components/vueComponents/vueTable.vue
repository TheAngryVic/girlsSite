<script setup lang="ts">
import { ref, defineProps } from 'vue';
import ParserCurrency from '../../services/currencyParser';
const props = defineProps({
  cols: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  data: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  id: {
    type: String,
    default: '',
  },
});

const handleAction = (row: any) => {
  console.log(row);
  console.log(`Acción para el id ${row.uid}`);
};

const getNestedValue = (obj: any, dataKey: string) => {
  return dataKey.split('.').reduce((o, k) => (o || {})[k], obj);
};
</script>
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, index) in cols" :key="'col' + index">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="'row' + rowIndex">
        <td v-for="col in cols" :key="col.dataKey">
          <div class="flex" v-if="col.type === 'actions'">
            <button class="btn btn__editar" @click="handleAction(row)"></button>
            <button class="btn btn__eliminar" @click="handleAction(row)"></button>
          </div>
          <span v-else-if="col.type === 'text'">{{ getNestedValue(row, col.dataKey) }}</span>
          <span v-else-if="col.type === 'currency'">{{ ParserCurrency(row[col.dataKey]) }}</span>
          <!-- Agrega más condiciones aquí para otros tipos de datos -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
// sets

$gl-ms : "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs : "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm : "screen and (max-width: 48em)"; // max 768px
$gl-md : "screen and (max-width: 64em)"; // max 1024px
$gl-lg : "screen and (max-width: 80em)"; // max 1280px

// table style

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  * {
    position: relative
  }

  td,
  th {
    padding-left: 8px
  }

  thead tr {
    height: 60px;
    background: #FFED86;
    font-size: 16px;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid #E3F1D5;

    &:last-child {
      border: 0;
    }
  }

  td,
  th {
    text-align: left;

    &.l {
      text-align: right
    }

    &.c {
      text-align: center
    }

    &.r {
      text-align: center
    }
  }
}

// tbody tr {
//   min-width: auto; // establece la altura mínima de las filas
//   border-bottom: 1px solid #E3F1D5;

//   &:last-child {
//     border: 0;
//   }

//   td {
//     padding-left: 8px;
//     min-width: inherit; // hereda la altura mínima de la fila
//   }
// }


@media #{$gl-xs} {

  table {
    display: block;

    >*,
    tr,
    td,
    th {
      display: block
    }

    thead {
      display: none
    }

    tbody tr {
      height: auto;
      padding: 8px 0;

      td {
        padding-left: 45%;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0
        }

        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0
        }

        &:nth-child(1):before {
          content: "Code";
        }

        &:nth-child(2):before {
          content: "Stock";
        }

        &:nth-child(3):before {
          content: "Cap";
        }

        &:nth-child(4):before {
          content: "Inch";
        }

        &:nth-child(5):before {
          content: "Box Type";
        }
      }
    }
  }
}


.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 2px;
  font-size: 2.5rem;
  background: #14171A;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 5px 5px 10px #AAB8C2;
}

.btn:focus,
.btn:hover {
  background: #14171A;
  outline: none;
}

.btn__eliminar {
  background: #FF453A;
  background-image: url("/src/icons/trashCan.svg");
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}

.btn__eliminar:focus,
.btn__eliminar:hover {
  background: #c1342d;
  background-image: url("/src/icons/trashCan.svg");
  outline: none;
  background-repeat: no-repeat;
  background-position: center;
}

.btn__editar {
  background: #1DA1F2;
  background-image: url("/src/icons/edit.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.btn__editar:focus,
.btn__editar:hover {
  background: #177bb8;
  background-image: url("/src/icons/edit.svg");
  outline: none;
  background-repeat: no-repeat;
  background-position: center;
}
</style>