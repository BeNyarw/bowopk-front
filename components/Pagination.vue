<template>
    <ul class="pagination flex justify-center">
     
      <li class="pagination-item">
        <md-button class="md-accent"
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Précèdent 
        </md-button>
      </li>
      <!-- Visible Buttons Start  -->
      <li
        class="pagination-item"
      >
{{this.currentpage}}
      </li>
  
      <!-- Visible Buttons End -->
  
      <li class="pagination-item">
        <md-button
        class="md-accent"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          Suivant
        </md-button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: "Pagination",
    props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },    
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentpage: {
      type: Number,
      required: true
    }
  },
    computed: {
    startPage() {
        // When on the first page
        if (this.currentpage === 1) {
        return 1;
        }

        // When on the last page
        if (this.currentpage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
        }

        // When inbetween
        return this.currentpage - 1;
    },
    isInFirstPage() {
      return this.currentpage === 1;
    },
    isInLastPage() {
      return this.currentpage === this.totalPages;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentpage
        });
      }
      return range;
    },
  },
    methods: {
        isPageActive(page) {
        return this.currentpage === page;
        },
        onClickPreviousPage() {
            this.$emit('pagechanged',             {
                page: this.currentpage - 1,
                type: "previous",
            });
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged',            {
                page: this.currentpage + 1,
                type: "next",
            });
        }
    }
  }
  </script>
  
  <style>
  .pagination {
    list-style-type: none;
  }
  
  .pagination-item {
    display: inline-block;
  }
  
  .active {
    background-color: #4AAE9B;
    color: #ffffff;
  }
  </style>